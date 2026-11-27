/**
 * Tokenizer shared by the search index build (scripts/generate-search-index.ts)
 * and the `/.well-known/search` handler (worker-search.ts). Both sides must
 * tokenize the same way, or query terms won't match indexed terms.
 */
const STOP_WORDS = new Set(
  ("a an and are as at be by can do does for from has have how i in is it its me my of on or our " +
    "that the their there these this to was we what when where which who why will with you your")
    .split(" "),
);

// Light plural stemming so "forklifts" matches "forklift".
function stem(token: string): string {
  if (token.length > 4 && token.endsWith("ies")) return `${token.slice(0, -3)}y`;
  if (token.length > 3 && token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  return token;
}

export function tokenize(text: string): string[] {
  return (text.toLowerCase().normalize("NFKD").match(/[\p{L}\p{N}]+/gu) ?? [])
    .filter((t) => !STOP_WORDS.has(t))
    .map(stem);
}
