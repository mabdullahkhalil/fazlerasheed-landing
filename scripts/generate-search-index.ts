#!/usr/bin/env bun
/**
 * Builds the index behind `/.well-known/search` (Search for Agents).
 *
 * Runs right after `next build` (see the "next:build" script), so it reads
 * the prerendered HTML in .next/server/app. Only URLs in public/sitemap.xml
 * are indexed. Each page's <main> is converted to plain Markdown-ish text and
 * split into passages at headings. It also builds a BM25 inverted index, so
 * the Worker does no indexing work at request time. worker-search.ts bundles
 * the output.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { tokenize } from "../src/lib/search-tokenize";

const ROOT = resolve(import.meta.dirname, "..");
const APP_DIR = resolve(ROOT, ".next/server/app");
const OUT = resolve(ROOT, ".next/agent-search-index.json");
const BASE = "https://fazlerasheed.com";
const MIN_PASSAGE = 500;
const MAX_PASSAGE = 1500;

type Passage = { path: string; title: string; heading: string; text: string };

const ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  ndash: "–", mdash: "—", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
};

function decode(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

// Small HTML -> Markdown-ish converter. Good enough for search passages; the
// full page is still available as Markdown via `Accept: text/markdown`.
function htmlToText(html: string): string {
  return decode(
    html
      .replace(/<(script|style|svg|noscript|template|form|button)\b[\s\S]*?<\/\1>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<nav\b[\s\S]*?<\/nav>/gi, "")
      .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level: string, inner: string) =>
        `\n\n${"#".repeat(Number(level))} ${inner.replace(/<[^>]+>/g, "").trim()}\n\n`)
      .replace(/<li\b[^>]*>/gi, "\n- ")
      .replace(/<(br|hr)\b[^>]*>/gi, "\n")
      .replace(/<\/(p|div|section|article|ul|ol|table|tr|blockquote|header|footer|dl|figure)>/gi, "\n\n")
      .replace(/<\/(td|th|dt|dd)>/gi, " | ")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((line) => line.replace(/[ \t ]+/g, " ").trim())
    .filter((line, i, lines) => line !== "" || lines[i - 1] !== "")
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function meta(html: string, re: RegExp): string {
  return decode(html.match(re)?.[1] ?? "").trim();
}

// Splits page text into passages of MIN_PASSAGE..MAX_PASSAGE characters. A
// new passage starts at a heading once the current one is long enough, so
// short sections (product cards, stats) merge with their neighbours.
function toPassages(path: string, title: string, description: string, body: string): Passage[] {
  const passages: Passage[] = [];
  let current = { heading: title, text: description ? `${description}\n\n` : "" };
  const flush = () => {
    const text = current.text.trim();
    if (text.length > 40) passages.push({ path, title, heading: current.heading, text });
  };

  // Card layouts produce many one-line blocks ("Battery 80V LiFePO4",
  // "Request Quote"). Keep consecutive short blocks on adjacent lines.
  const blocks: string[] = [];
  const isShort = (b: string) => b.length < 80 && !b.startsWith("#") && !b.includes("\n");
  for (const block of body.split(/\n\n+/)) {
    if (blocks.length && isShort(block) && isShort(blocks.at(-1)!.split("\n").at(-1)!)) {
      blocks[blocks.length - 1] += `\n${block}`;
    } else blocks.push(block);
  }

  for (const block of blocks) {
    const heading = block.match(/^#{1,6} (.+)$/)?.[1];
    if (heading && current.text.length >= MIN_PASSAGE) {
      flush();
      current = { heading, text: "" };
      continue;
    }
    if (current.text.length + block.length > MAX_PASSAGE && current.text.length > 0) {
      flush();
      current = { heading: current.heading, text: "" };
    }
    current.text += `${block}\n\n`;
  }
  flush();
  return passages;
}

function main() {
  if (!existsSync(APP_DIR)) throw new Error(`Missing ${APP_DIR}. Run \`next build\` first.`);

  const sitemap = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

  const passages: Passage[] = [];
  const missing: string[] = [];
  for (const path of paths) {
    const file = resolve(APP_DIR, path === "/" ? "index.html" : `${path.slice(1)}.html`);
    if (!existsSync(file)) {
      missing.push(path);
      continue;
    }
    const html = readFileSync(file, "utf-8");
    if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;

    const title = meta(html, /<title>([\s\S]*?)<\/title>/i).replace(/( \| Fazlerasheed & Co\.)+$/, "");
    const description = meta(html, /<meta name="description" content="([^"]*)"/i);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
    passages.push(...toPassages(path, title, description, htmlToText(main)));
  }

  if (missing.length) console.warn(`[search-index] No prerendered HTML for: ${missing.join(", ")}`);
  if (passages.length === 0) throw new Error("Search index is empty.");

  // Inverted index: term -> flat [passageIndex, termFrequency, ...] pairs.
  // Title and heading terms count three times: they describe the passage.
  // Null prototype, so terms like "constructor" are plain keys.
  const postings: Record<string, number[]> = Object.create(null);
  const lengths = passages.map((passage, i) => {
    const head = tokenize(`${passage.title} ${passage.heading}`);
    const tokens = [...head, ...head, ...head, ...tokenize(passage.text)];
    const tf = new Map<string, number>();
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const [t, n] of tf) (postings[t] ??= []).push(i, n);
    return tokens.length;
  });
  const avgLength = lengths.reduce((sum, n) => sum + n, 0) / lengths.length;

  writeFileSync(
    OUT,
    JSON.stringify({ base: BASE, generated: new Date().toISOString(), passages, lengths, avgLength, postings }),
  );
  const kb = Math.round(Buffer.byteLength(readFileSync(OUT)) / 1024);
  console.log(`[search-index] ${passages.length} passages from ${paths.length - missing.length} pages (${kb} KB)`);
}

main();
