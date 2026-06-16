#!/usr/bin/env node
/**
 * Submits all sitemap URLs to IndexNow (Bing, Yandex, Naver, etc.).
 * Run manually or in a deploy hook after the sitemap is generated:
 *   bun run scripts/submit-indexnow.ts
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const HOST = "fazlerasheed.com";
const KEY = "9df57d602ba3b1e7aeff443765724945";
const ROOT = resolve(import.meta.dirname, "..");

const xml = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("No URLs found in sitemap.xml — nothing to submit.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok) process.exit(1);
