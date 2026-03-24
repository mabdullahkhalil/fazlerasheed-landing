# Blog System Specification

## Overview

Blog posts are authored as **Markdown files** — no CMS. Each `.md` file contains frontmatter (metadata) and the full post content. The Next.js app reads these files at build time to generate static blog pages.

---

## Markdown File Location

```
src/content/blog/
├── how-to-choose-the-right-forklift.md
├── battery-vs-diesel-forklift.md
├── forklift-price-guide-pakistan-2026.md
└── ...
```

Each file is named using the **slug** (URL path segment).

---

## Frontmatter Structure

Every blog Markdown file must begin with YAML frontmatter between `---` delimiters:

```markdown
---
title: "How to Choose the Right Forklift for Your Warehouse"
slug: "how-to-choose-the-right-forklift"
url: "/blog/how-to-choose-the-right-forklift"
metaTitle: "How to Choose the Right Forklift for Your Warehouse | Fazlerasheed & Co."
metaDescription: "Complete guide to choosing the right forklift for your warehouse. Compare battery vs diesel, capacity, mast height, and more. Expert advice from 10+ years in Pakistan's MHE market."
description: "A comprehensive buying guide that walks warehouse managers through choosing the right forklift based on capacity, power source, mast height, and budget."
author: "Abdullah"
date: "2026-03-22"
updatedAt: "2026-03-22"
category: "buying-guides"
tags:
  - forklift
  - buying guide
  - warehouse
  - battery operated
coverImage: "/images/blog/how-to-choose-forklift.webp"
coverImageAlt: "Battery operated forklift in a warehouse in Lahore, Pakistan"
featured: false
draft: false
---

# How to Choose the Right Forklift for Your Warehouse

Your blog content starts here...
```

---

## Frontmatter Fields Reference

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | Yes | string | Display title shown on the page (H1) |
| `slug` | Yes | string | URL path segment, lowercase, hyphenated |
| `url` | Yes | string | Full URL path (e.g. `/blog/your-slug`) |
| `metaTitle` | Yes | string | SEO title tag, max 60 characters |
| `metaDescription` | Yes | string | SEO meta description, 150–160 characters |
| `description` | Yes | string | Short summary for blog listing cards and internal reference |
| `author` | Yes | string | Author name (for E-E-A-T) |
| `date` | Yes | string | Publish date in `YYYY-MM-DD` format |
| `updatedAt` | No | string | Last updated date in `YYYY-MM-DD` format |
| `category` | Yes | string | One of the defined categories (see below) |
| `tags` | Yes | string[] | Array of relevant tags for filtering |
| `coverImage` | Yes | string | Path to cover image in `/public/images/blog/` |
| `coverImageAlt` | Yes | string | Descriptive alt text for the cover image |
| `featured` | No | boolean | `true` to feature on homepage/blog listing (default: `false`) |
| `draft` | No | boolean | `true` to exclude from build (default: `false`) |

---

## Categories

Use one of these values for the `category` field:

| Category Slug | Label |
|---------------|-------|
| `buying-guides` | Buying Guides |
| `comparisons` | Comparisons |
| `maintenance-tips` | Maintenance Tips |
| `industry-insights` | Industry Insights |

---

## Content Guidelines

### Markdown Body

After the frontmatter, write standard Markdown:

```markdown
## Introduction

Opening paragraph with the primary keyword naturally included...

## Section Heading (H2)

Content with **bold**, *italic*, [links](/services/forklift-sales), etc.

### Subsection (H3)

More detailed content...

| Column 1 | Column 2 | Column 3 |
|-----------|----------|----------|
| Data | Data | Data |

> Blockquote for callouts or expert tips

![Alt text for image](/images/blog/image-name.webp)

## Conclusion

Wrap-up paragraph...

## Frequently Asked Questions

### What is the best forklift for a small warehouse?
Answer here...

### How much does a used forklift cost in Pakistan?
Answer here...
```

### Internal Links

Always use relative paths for internal links:

```markdown
[forklift rental services](/services/forklift-rental)
[Toyota forklifts](/brands/toyota)
[browse our forklifts](/equipment/forklifts)
```

### Images

Place images in `/public/images/blog/` and reference them as:

```markdown
![Descriptive alt text](/images/blog/filename.webp)
```

---

## Full Example File

```markdown
---
title: "Battery vs Diesel Forklift: Complete Comparison"
slug: "battery-vs-diesel-forklift"
url: "/blog/battery-vs-diesel-forklift"
metaTitle: "Battery vs Diesel Forklift: Complete Comparison | Fazlerasheed & Co."
metaDescription: "Battery vs diesel forklift — compare costs, maintenance, performance, and environmental impact. Find out which is best for your warehouse in Pakistan."
description: "A detailed comparison of battery-operated and diesel forklifts covering cost, maintenance, performance, safety, and suitability for different industries."
author: "Khalil Ahmad"
date: "2026-04-01"
category: "comparisons"
tags:
  - forklift
  - battery forklift
  - diesel forklift
  - comparison
coverImage: "/images/blog/battery-vs-diesel-forklift.webp"
coverImageAlt: "Side by side comparison of a battery operated forklift and a diesel forklift"
featured: true
draft: false
---

# Battery vs Diesel Forklift: Complete Comparison

Choosing between a battery-operated and diesel forklift is one of the most important decisions for any warehouse or factory. In this guide, we compare both options across every factor that matters.

## Cost Comparison

| Factor | Battery Forklift | Diesel Forklift |
|--------|-----------------|-----------------|
| Purchase Price | Higher upfront | Lower upfront |
| Fuel/Energy Cost | Lower (electricity) | Higher (diesel) |
| Maintenance Cost | Lower | Higher |
| Total Cost of Ownership (5yr) | Lower | Higher |

Battery forklifts have a higher initial cost but significantly lower operating costs over time...

## Performance

### Indoor Use
Battery forklifts are the clear winner for indoor use — zero emissions, lower noise...

### Outdoor Use
Diesel forklifts handle rough terrain and extreme conditions better...

## Maintenance Requirements

Battery forklifts require less maintenance since they have fewer moving parts...

[Learn more about our maintenance services](/services/maintenance)

## Environmental Impact

Battery-operated forklifts produce zero direct emissions, making them ideal for...

## Which Should You Choose?

For most warehouse operations in Pakistan, we recommend battery-operated forklifts. [Browse our inventory](/equipment/forklifts) or [contact us for a consultation](/contact).

## Frequently Asked Questions

### Can battery forklifts work outdoors?
Yes, battery forklifts can work outdoors on smooth surfaces...

### How long does a forklift battery last?
A well-maintained forklift battery typically lasts 5–7 years...
```

---

## How to Add a New Blog Post

1. Create a new `.md` file in `src/content/blog/` named after the slug
2. Add the required frontmatter with all metadata
3. Write the content in Markdown
4. Place the cover image in `/public/images/blog/`
5. Rebuild/redeploy — Next.js picks it up automatically
