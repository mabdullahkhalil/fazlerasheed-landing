#!/usr/bin/env node
/**
 * Pre-generates blog post data as JSON so the app never needs fs at runtime.
 * Runs automatically before each build via the "prebuild" npm script.
 */

import { readFileSync, readdirSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ROOT = resolve(import.meta.dirname, "..");
const BLOG_DIR = resolve(ROOT, "src/content/blog");
const OUT_FILE = resolve(ROOT, "src/data/blog-posts.json");

async function main() {
  if (!existsSync(BLOG_DIR)) {
    writeFileSync(OUT_FILE, "[]", "utf-8");
    console.log("No blog directory found — wrote empty blog-posts.json");
    return;
  }

  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: any[] = [];
  for (const file of files) {
    const raw = readFileSync(resolve(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    if (data.draft) continue;

    const result = await remark().use(html, { sanitize: false }).process(content);

    posts.push({
      ...data,
      content,
      html: result.toString(),
    });
  }

  // Sort by date descending
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2), "utf-8");
  console.log(`Blog data generated: ${posts.length} posts → src/data/blog-posts.json`);
}

main();
