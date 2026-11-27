/**
 * Search for Agents (https://blog.cloudflare.com/search-for-agents).
 *
 * Agents can query `/.well-known/search?q=...` instead of crawling every
 * page. worker.ts serves the endpoint from a build-time index (see
 * scripts/generate-search-index.ts). We self-host it because the site is
 * served by a Worker, the same reason Markdown for Agents is self-hosted.
 *
 * The root layout advertises it with `agent:*` meta tags, and Markdown
 * responses carry the same fields as YAML front matter.
 */
export const AGENT_SEARCH_PATH = "/.well-known/search";

export const AGENT_SEARCH = {
  instructions:
    "Use this search API to find relevant content across this site with keywords or natural-language queries, instead of crawling individual pages. Results are Markdown passages with source URLs and relevance scores.",
  endpoint: `https://fazlerasheed.com${AGENT_SEARCH_PATH}?q={query}`,
  method: "GET",
  documentation: "https://developers.cloudflare.com/ai-search/how-to/search-for-agents/",
} as const;
