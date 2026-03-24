import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // ═══════════════════════════════════════════════
      // 1. PAGE REDIRECTS (old WP URLs → new routes)
      // ═══════════════════════════════════════════════
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/company", destination: "/", permanent: true },
      { source: "/company/", destination: "/", permanent: true },
      { source: "/forklift-rental-in-pakistan", destination: "/services", permanent: true },
      { source: "/forklift-rental-in-pakistan/", destination: "/services", permanent: true },
      { source: "/machine", destination: "/products", permanent: true },
      { source: "/machine/", destination: "/products", permanent: true },
      { source: "/warehousing-equipment-and-spare-parts", destination: "/products", permanent: true },
      { source: "/warehousing-equipment-and-spare-parts/", destination: "/products", permanent: true },
      { source: "/all-spare-parts", destination: "/spare-parts", permanent: true },
      { source: "/all-spare-parts/", destination: "/spare-parts", permanent: true },
      { source: "/lights", destination: "/spare-parts", permanent: true },
      { source: "/lights/", destination: "/spare-parts", permanent: true },
      { source: "/privacy-policy", destination: "/", permanent: true },
      { source: "/privacy-policy/", destination: "/", permanent: true },
      { source: "/shop", destination: "https://shop.fazlerasheed.com", permanent: true },
      { source: "/shop/", destination: "https://shop.fazlerasheed.com", permanent: true },

      // ═══════════════════════════════════════════════
      // 2. BLOG POST REDIRECTS (root-level → /blog/ prefix)
      // ═══════════════════════════════════════════════
      {
        source: "/7-essential-forklift-battery-maintenance-tips-for-longer-life",
        destination: "/blog/7-essential-forklift-battery-maintenance-tips-for-longer-life",
        permanent: true,
      },
      {
        source: "/7-essential-forklift-battery-maintenance-tips-for-longer-life/",
        destination: "/blog/7-essential-forklift-battery-maintenance-tips-for-longer-life",
        permanent: true,
      },
      {
        source: "/electric-vs-gas-forklifts-a-cost-comparison-guide",
        destination: "/blog/electric-vs-gas-forklifts-a-cost-comparison-guide",
        permanent: true,
      },
      {
        source: "/electric-vs-gas-forklifts-a-cost-comparison-guide/",
        destination: "/blog/electric-vs-gas-forklifts-a-cost-comparison-guide",
        permanent: true,
      },
      {
        source: "/8-ways-to-reduce-material-handling-equipment-downtime",
        destination: "/blog/8-ways-to-reduce-material-handling-equipment-downtime",
        permanent: true,
      },
      {
        source: "/8-ways-to-reduce-material-handling-equipment-downtime/",
        destination: "/blog/8-ways-to-reduce-material-handling-equipment-downtime",
        permanent: true,
      },

      // ═══════════════════════════════════════════════
      // 3. BLOG CATEGORY REDIRECTS
      // ═══════════════════════════════════════════════
      { source: "/category/:slug", destination: "/blog", permanent: true },
      { source: "/category/:slug/", destination: "/blog", permanent: true },

      // ═══════════════════════════════════════════════
      // 4. PRODUCT CATEGORY → NEW EQUIPMENT PAGES
      // ═══════════════════════════════════════════════
      { source: "/product-category/machines", destination: "/products", permanent: true },
      { source: "/product-category/machines/", destination: "/products", permanent: true },
      { source: "/product-category/machines/fork-lifter", destination: "/products/forklifts", permanent: true },
      { source: "/product-category/machines/fork-lifter/", destination: "/products/forklifts", permanent: true },
      { source: "/product-category/machines/reach-truck", destination: "/products/reach-trucks", permanent: true },
      { source: "/product-category/machines/reach-truck/", destination: "/products/reach-trucks", permanent: true },
      { source: "/product-category/machines/tow-truck", destination: "/products/tow-trucks", permanent: true },
      { source: "/product-category/machines/tow-truck/", destination: "/products/tow-trucks", permanent: true },
      { source: "/product-category/machines/stacker", destination: "/products/stackers", permanent: true },
      { source: "/product-category/machines/stacker/", destination: "/products/stackers", permanent: true },
      { source: "/product-category/machines/order-picker", destination: "/products/order-pickers", permanent: true },
      { source: "/product-category/machines/order-picker/", destination: "/products/order-pickers", permanent: true },
      { source: "/product-category/machines/power-pallets", destination: "/products/power-pallets", permanent: true },
      { source: "/product-category/machines/power-pallets/", destination: "/products/power-pallets", permanent: true },
      { source: "/product-category/machines/hand-pallet", destination: "/products/hand-pallets", permanent: true },
      { source: "/product-category/machines/hand-pallet/", destination: "/products/hand-pallets", permanent: true },

      // ═══════════════════════════════════════════════
      // 5. SPARE PARTS CATEGORY REDIRECTS
      // ═══════════════════════════════════════════════
      { source: "/product-category/spare-parts", destination: "/spare-parts", permanent: true },
      { source: "/product-category/spare-parts/", destination: "/spare-parts", permanent: true },
      { source: "/product-category/spare-parts/hydraulic-parts", destination: "/spare-parts/category/hydraulic-parts", permanent: true },
      { source: "/product-category/spare-parts/hydraulic-parts/", destination: "/spare-parts/category/hydraulic-parts", permanent: true },
      { source: "/product-category/spare-parts/steering-parts", destination: "/spare-parts/category/steering-parts", permanent: true },
      { source: "/product-category/spare-parts/steering-parts/", destination: "/spare-parts/category/steering-parts", permanent: true },
      { source: "/product-category/spare-parts/brake-parts", destination: "/spare-parts/category/brake-parts", permanent: true },
      { source: "/product-category/spare-parts/brake-parts/", destination: "/spare-parts/category/brake-parts", permanent: true },
      { source: "/product-category/spare-parts/chassis-parts", destination: "/spare-parts/category/chassis-parts", permanent: true },
      { source: "/product-category/spare-parts/chassis-parts/", destination: "/spare-parts/category/chassis-parts", permanent: true },
      { source: "/product-category/spare-parts/transmission-parts", destination: "/spare-parts/category/transmission-parts", permanent: true },
      { source: "/product-category/spare-parts/transmission-parts/", destination: "/spare-parts/category/transmission-parts", permanent: true },
      { source: "/product-category/spare-parts/wheels", destination: "/spare-parts/category/tires-wheels", permanent: true },
      { source: "/product-category/spare-parts/wheels/", destination: "/spare-parts/category/tires-wheels", permanent: true },
      { source: "/product-category/spare-parts/other-parts", destination: "/spare-parts", permanent: true },
      { source: "/product-category/spare-parts/other-parts/", destination: "/spare-parts", permanent: true },
      { source: "/product-category/uncategorized", destination: "/products", permanent: true },
      { source: "/product-category/uncategorized/", destination: "/products", permanent: true },

      // ═══════════════════════════════════════════════
      // 6. INDIVIDUAL PRODUCT PAGES → BEST MATCH
      //    (130+ old WP /product/ URLs → new pages)
      // ═══════════════════════════════════════════════

      // Forklift machines → brand/type page
      { source: "/product/jungheinrich", destination: "/products/jungheinrich/forklifts", permanent: true },
      { source: "/product/forklifet-jungheinrich", destination: "/products/jungheinrich/forklifts", permanent: true },
      { source: "/product/forklift-jungheinrich", destination: "/products/jungheinrich/forklifts", permanent: true },
      { source: "/product/30251-jungheinrich-etv-214-6", destination: "/products/jungheinrich/reach-trucks", permanent: true },
      { source: "/product/tow-truck-jungheinrich", destination: "/products", permanent: true },
      { source: "/product/order-picker-jungheinrich", destination: "/products/jungheinrich/order-pickers", permanent: true },

      { source: "/product/still-fork-lifter", destination: "/products/still/forklifts", permanent: true },
      { source: "/product/order-picker-still", destination: "/products", permanent: true },
      { source: "/product/order-picker-still-2", destination: "/products", permanent: true },

      { source: "/product/bt-fork-lifter", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/bt", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/forklift-bt", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/forklift-bt-2", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/bt-stacker", destination: "/products/bt/stackers", permanent: true },
      { source: "/product/reach-truck-bt", destination: "/products/bt/reach-trucks", permanent: true },
      { source: "/product/reach-truck-bt-2", destination: "/products/bt/reach-trucks", permanent: true },
      { source: "/product/hand-pallet-bt", destination: "/products/bt/hand-pallets", permanent: true },
      { source: "/product/power-pallet-bt", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/power-pallet-bt-2", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/power-pallet-bt-3", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/power-pallet-bt-4", destination: "/products/bt/power-pallets", permanent: true },
      { source: "/product/power-pallet-bt-5", destination: "/products/bt/power-pallets", permanent: true },

      { source: "/product/yale", destination: "/products/yale/forklifts", permanent: true },
      { source: "/product/fenwick", destination: "/products", permanent: true },
      { source: "/product/dimos", destination: "/products", permanent: true },

      { source: "/product/forklifter-linde-3-5tons", destination: "/products/linde/forklifts", permanent: true },
      { source: "/product/forklift-linde-2", destination: "/products/linde/forklifts", permanent: true },
      { source: "/product/forklift-linde-3", destination: "/products/linde/forklifts", permanent: true },
      { source: "/product/reach-truck-linde", destination: "/products/linde/reach-trucks", permanent: true },
      { source: "/product/order-picker-linde", destination: "/products", permanent: true },
      { source: "/product/order-picker-linde-2", destination: "/products", permanent: true },
      { source: "/product/power-pallet-linde", destination: "/products/linde/power-pallets", permanent: true },
      { source: "/product/power-pallet-linde-2", destination: "/products/linde/power-pallets", permanent: true },
      { source: "/product/w4x140w00104-power-pallet-linde-2-ton", destination: "/products/linde/power-pallets", permanent: true },

      { source: "/product/forklift-toyota", destination: "/products/toyota/forklifts", permanent: true },
      { source: "/product/forklift-toyota-2", destination: "/products/toyota/forklifts", permanent: true },
      { source: "/product/forklift-toyota-3", destination: "/products/toyota/forklifts", permanent: true },
      { source: "/product/forklift-toyota-4", destination: "/products/toyota/forklifts", permanent: true },

      { source: "/product/forklift-clark", destination: "/products/clark/forklifts", permanent: true },

      { source: "/product/reach-truck-crown", destination: "/products/crown/reach-trucks", permanent: true },
      { source: "/product/reach-truck-pakistan-jungheinrich", destination: "/products/jungheinrich/reach-trucks", permanent: true },

      { source: "/product/hand-pallet-ravas", destination: "/products/hand-pallets", permanent: true },
      { source: "/product/hand-pallet-ravas-2", destination: "/products/hand-pallets", permanent: true },
      { source: "/product/hand-pallet-china", destination: "/products/hand-pallets", permanent: true },

      // Catch-all: any remaining /product/ URLs → shop or /products
      { source: "/product/:slug", destination: "/products", permanent: true },
      { source: "/product/:slug/", destination: "/products", permanent: true },

      // ═══════════════════════════════════════════════
      // 7. WORDPRESS ARTIFACTS
      // ═══════════════════════════════════════════════
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/", destination: "/blog", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/product-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/product_cat-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-product-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-category-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-product_cat-1.xml", destination: "/sitemap.xml", permanent: true },

      // ═══════════════════════════════════════════════
      // 8. TRAILING SLASH CLEANUP for key pages
      // ═══════════════════════════════════════════════
      { source: "/blog/", destination: "/blog", permanent: true },
      { source: "/spare-parts/", destination: "/spare-parts", permanent: true },
      { source: "/batteries/", destination: "/batteries", permanent: true },
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/products/", destination: "/products", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
