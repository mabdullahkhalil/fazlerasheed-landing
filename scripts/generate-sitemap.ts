#!/usr/bin/env node
/**
 * Generates public/sitemap.xml with git-based <lastmod> dates.
 * Runs automatically before each build via the "prebuild" npm script.
 */

import { execSync } from "child_process";
import { writeFileSync, readdirSync } from "fs";
import { resolve } from "path";

const BASE = "https://fazlerasheed.com";
const ROOT = resolve(import.meta.dirname, "..");

function gitDate(filePath: string): string {
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${filePath}`, {
      cwd: ROOT,
      encoding: "utf-8",
    }).trim();
    if (iso) return new Date(iso).toISOString().split("T")[0];
  } catch {
    /* fallback */
  }
  return new Date().toISOString().split("T")[0];
}

function latest(...files: string[]): string {
  const dates = files.map((f) => {
    try {
      const iso = execSync(`git log -1 --format=%cI -- ${f}`, {
        cwd: ROOT,
        encoding: "utf-8",
      }).trim();
      return iso ? new Date(iso).getTime() : 0;
    } catch {
      return 0;
    }
  });
  const max = Math.max(...dates);
  return max > 0
    ? new Date(max).toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
}

// ── Read slugs from catalog.ts using regex (avoids TS import issues) ──
import { readFileSync } from "fs";
const catalogSrc = readFileSync(resolve(ROOT, "src/data/catalog.ts"), "utf-8");

function extractSlugs(arrayName: string): string[] {
  // Match the array and extract all slug values
  const arrayRegex = new RegExp(
    `export const ${arrayName}[\\s\\S]*?\\] (?:as const )?satisfies`,
    "m",
  );
  const match = catalogSrc.match(arrayRegex);
  if (!match) {
    // Fallback: try simpler pattern
    const simpleRegex = new RegExp(
      `export const ${arrayName}[\\s\\S]*?^\\];`,
      "m",
    );
    const simpleMatch = catalogSrc.match(simpleRegex);
    if (!simpleMatch) return [];
    const slugs = [...simpleMatch[0].matchAll(/slug:\s*"([^"]+)"/g)].map(
      (m) => m[1],
    );
    return slugs;
  }
  const slugs = [...match[0].matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return slugs;
}

const brandSlugs = extractSlugs("brands");
const categorySlugs = extractSlugs("partCategories");
const equipmentSlugs = extractSlugs("equipmentTypes");
const citySlugs = extractSlugs("cities");

const DATA_FILE = "src/data/catalog.ts";

// ── Build URL entries ──
type Entry = { loc: string; lastmod: string };
const entries: Entry[] = [];

// Core pages
const corePages = [
  { path: "/", file: "src/app/page.tsx" },
  { path: "/products", file: "src/app/products/page.tsx" },
  { path: "/batteries", file: "src/app/batteries/page.tsx" },
  { path: "/services", file: "src/app/services/page.tsx" },
  { path: "/spare-parts", file: "src/app/spare-parts/page.tsx" },
  { path: "/contact", file: "src/app/contact/page.tsx" },
  { path: "/ep", file: "src/app/ep/page.tsx" },
  { path: "/blog", file: "src/app/blog/page.tsx" },
];
for (const p of corePages) {
  entries.push({ loc: `${BASE}${p.path}`, lastmod: gitDate(p.file) });
}

// Brand pages
const brandDate = latest("src/app/spare-parts/[brand]/page.tsx", DATA_FILE);
for (const slug of brandSlugs) {
  entries.push({ loc: `${BASE}/spare-parts/${slug}`, lastmod: brandDate });
}

// Category pages
const catDate = latest("src/app/spare-parts/category/[slug]/page.tsx", DATA_FILE);
for (const slug of categorySlugs) {
  entries.push({ loc: `${BASE}/spare-parts/category/${slug}`, lastmod: catDate });
}

// Location pages
const locDate = latest("src/app/locations/[city]/page.tsx", DATA_FILE);
for (const slug of citySlugs) {
  entries.push({ loc: `${BASE}/locations/${slug}`, lastmod: locDate });
}

// Equipment pages
const eqDate = latest("src/app/products/[...slug]/page.tsx", DATA_FILE);
for (const slug of equipmentSlugs) {
  entries.push({ loc: `${BASE}/products/${slug}`, lastmod: eqDate });
}

// Brand-equipment combo pages
const beDate = latest("src/app/products/[...slug]/page.tsx", DATA_FILE);

// Build equipment name→slug map from equipmentTypes array
const eqNameToSlug: Record<string, string> = {};
const eqSection = catalogSrc.match(/export const equipmentTypes[\s\S]*?^\];/m);
if (eqSection) {
  const eqBlocks = eqSection[0].split(/\{\s*slug:/);
  for (const block of eqBlocks) {
    const slugM = block.match(/^\s*"([^"]+)"/);
    const nameM = block.match(/name:\s*"([^"]+)"/);
    if (slugM && nameM) eqNameToSlug[nameM[1]] = slugM[1];
  }
}

// For each brand, extract its equipmentTypes and generate combo URLs
for (const bSlug of brandSlugs) {
  const brandBlock = catalogSrc.match(
    new RegExp(`slug:\\s*"${bSlug}"[\\s\\S]*?equipmentTypes:\\s*\\[([^\\]]+)\\]`),
  );
  if (!brandBlock) continue;
  const eqNames = [...brandBlock[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  for (const eqName of eqNames) {
    const eqSlug = eqNameToSlug[eqName];
    if (eqSlug) {
      entries.push({
        loc: `${BASE}/products/${bSlug}/${eqSlug}`,
        lastmod: beDate,
      });
    }
  }
}

// Blog posts
const blogDir = resolve(ROOT, "src/content/blog");
const blogDate = latest("src/app/blog/[slug]/page.tsx");
try {
  const blogFiles = readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  for (const file of blogFiles) {
    const slug = file.replace(/\.md$/, "");
    entries.push({ loc: `${BASE}/blog/${slug}`, lastmod: blogDate });
  }
} catch {
  /* no blog posts */
}

// ── Write XML ──
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;

const outPath = resolve(ROOT, "public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`Sitemap generated: ${entries.length} URLs → public/sitemap.xml`);
