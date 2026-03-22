# Site Structure — Fazlerasheed & Company

## Domain Architecture

| Domain | Purpose | Platform |
|--------|---------|----------|
| `fazlerasheed.com` | Landing page, branding, services, blog | Next.js (this project) |
| `shop.fazlerasheed.com` | Product listings, e-commerce | Existing Shopify/separate |

---

## URL Hierarchy

```
fazlerasheed.com/
├── / (Homepage)
│   └── Hero, services overview, featured equipment, trust signals, CTA
│
├── /services/
│   ├── /services/forklift-sales        — Buy battery-operated forklifts
│   ├── /services/forklift-rental       — Rental fleet (140+ machines)
│   ├── /services/maintenance            — Maintenance & repair services
│   ├── /services/spare-parts            — OEM & aftermarket spare parts
│   └── /services/batteries              — Traction batteries & regeneration
│
├── /equipment/
│   ├── /equipment/forklifts             — All forklift listings overview
│   ├── /equipment/reach-trucks          — Reach truck listings
│   ├── /equipment/power-pallets         — Power pallet listings
│   ├── /equipment/stackers              — Stacker listings
│   └── /equipment/batteries             — Battery product listings
│
├── /brands/
│   ├── /brands/toyota                   — Toyota equipment page
│   ├── /brands/linde                    — Linde equipment page
│   ├── /brands/crown                    — Crown equipment page
│   ├── /brands/bt                       — BT equipment page
│   ├── /brands/jungheinrich             — Jungheinrich equipment page
│   ├── /brands/still                    — Still equipment page
│   ├── /brands/nissan                   — Nissan equipment page
│   └── /brands/clark                    — Clark equipment page
│
├── /blog/
│   ├── /blog/buying-guides/             — Equipment buying guides
│   ├── /blog/comparisons/               — Brand & model comparisons
│   ├── /blog/maintenance-tips/          — Maintenance & care guides
│   └── /blog/industry-insights/         — Warehouse & logistics insights
│
├── /about/                              — Company story, team, experience
├── /contact/                            — Contact form, location, map, phone
├── /gallery/                            — Equipment photos, warehouse, fleet
├── /testimonials/                       — Customer reviews & case studies
└── /faq/                                — Frequently asked questions
```

---

## Page Templates Needed

### 1. Homepage
- Hero section with primary CTA
- Key services grid (sales, rental, maintenance, spare parts, batteries)
- Featured/latest equipment carousel
- Trust signals (10+ years, 140+ fleet, 8+ brands)
- Customer testimonials
- Blog post previews
- Contact CTA section

### 2. Service Page Template
- Service hero with description
- Key benefits/features
- Equipment types covered
- Process/how it works
- Pricing guidance (ranges or "request quote")
- Related equipment links
- CTA (WhatsApp / phone / form)

### 3. Equipment Category Page
- Category overview with buying guidance
- Filterable equipment grid
- Link to shop.fazlerasheed.com for full listings
- Related categories
- Relevant blog posts

### 4. Brand Page Template
- Brand overview and history
- Available equipment from this brand
- Why choose this brand
- Specifications comparison table
- Link to shop listings
- Related brands

### 5. Blog Post Template
- Article content with table of contents
- Author bio (E-E-A-T)
- Related posts
- CTA for relevant service
- Social sharing

### 6. Contact Page
- Contact form
- Phone number (click-to-call)
- WhatsApp link
- Google Maps embed
- Business hours
- Address

---

## Internal Linking Strategy

### Hub-and-Spoke Model
```
Homepage (hub)
├── Service Pages (spokes)
│   └── Link to → relevant equipment categories
│   └── Link to → relevant blog posts
│   └── Link to → relevant brands
│
├── Equipment Categories (spokes)
│   └── Link to → shop.fazlerasheed.com product pages
│   └── Link to → relevant service pages
│   └── Link to → buying guide blog posts
│
├── Brand Pages (spokes)
│   └── Link to → equipment by this brand
│   └── Link to → comparison blog posts
│   └── Link to → service pages
│
└── Blog Posts (supporting content)
    └── Link to → relevant service pages
    └── Link to → relevant equipment categories
    └── Link to → relevant brand pages
```

### Cross-Linking Rules
1. Every service page links to at least 2 equipment categories
2. Every equipment category links to the relevant service page
3. Every brand page links to available equipment and spare parts service
4. Every blog post links to at least 1 service page and 1 equipment category
5. Footer contains links to all main sections

---

## Navigation Structure

### Primary Nav
```
Home | Services ▼ | Equipment ▼ | Brands ▼ | Blog | About | Contact
```

### Services Dropdown
- Forklift Sales
- Forklift Rental
- Maintenance & Repair
- Spare Parts
- Batteries

### Equipment Dropdown
- Forklifts
- Reach Trucks
- Power Pallets
- Stackers
- Batteries

### Brands Dropdown
- Toyota | Linde | Crown | BT
- Jungheinrich | Still | Nissan | Clark

### Mobile Nav
- Hamburger menu with same structure
- Prominent WhatsApp/phone button

---

## SEO Technical Implementation

### Meta Tags Pattern
```
Title: {Page Title} | Fazlerasheed & Company — Pakistan's #1 Battery Forklift Dealer
Description: {Unique 150-160 char description with primary keyword}
```

### Open Graph Tags
- og:title, og:description, og:image for every page
- og:type: website (pages), article (blog)

### Canonical URLs
- Self-referencing canonicals on all pages
- shop.fazlerasheed.com pages canonical to themselves (separate domain)

### XML Sitemap Segments
- `/sitemap-pages.xml` — Static pages (home, about, contact, services)
- `/sitemap-equipment.xml` — Equipment category pages
- `/sitemap-brands.xml` — Brand pages
- `/sitemap-blog.xml` — Blog posts
- `/sitemap.xml` — Sitemap index
