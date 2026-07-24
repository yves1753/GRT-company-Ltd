import fs from "node:fs";
import path from "node:path";

const configPath = path.join(process.cwd(), "site.config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const SITE_URL = (
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  config.url ||
  ""
).replace(/\/$/, "");

if (!SITE_URL.startsWith("https://")) {
  console.error(
    "Set your production URL in site.config.json or VITE_SITE_URL before building.",
  );
  process.exit(1);
}

/** Public routes — keep in sync with src/routeTree.gen.ts */
const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/fleet", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
];

const lastmod = new Date().toISOString().slice(0, 10);

function locFor(pathname) {
  return pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
}

const urlEntries = routes
  .map(
    (route) => `  <url>
    <loc>${locFor(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${SITE_URL}`);
