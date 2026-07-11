import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// `npm run build` runs `opennextjs-cloudflare build`, which in turn needs to
// build the Next.js app. Point it at the `next:build` script (plain
// `next build`) rather than the default `bun run build` — otherwise OpenNext
// would re-invoke itself and recurse forever.
config.buildCommand = "bun run next:build";

export default config;
