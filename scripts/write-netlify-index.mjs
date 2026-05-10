import fs from "node:fs";
import path from "node:path";

const clientDir = path.join(process.cwd(), "dist", "client");
const assetsDir = path.join(clientDir, "assets");

function pickLargestMatching(dir, prefix, suffix) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing directory: ${dir}`);
  }
  const names = fs.readdirSync(dir);
  let best = null;
  let bestSize = -1;
  for (const name of names) {
    if (!name.startsWith(prefix) || !name.endsWith(suffix)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (!stat.isFile()) continue;
    if (stat.size > bestSize) {
      bestSize = stat.size;
      best = name;
    }
  }
  if (!best) {
    throw new Error(`No file matching ${prefix}*${suffix} in ${dir}`);
  }
  return best;
}

const mainJs = pickLargestMatching(assetsDir, "index-", ".js");

const html = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GRT Company Ltd — Power Solutions in Tanzania</title>
    <meta name="description" content="Sales, rentals, repairs and installation of generators and power electronics in Dar es Salaam, Tanzania." />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="/assets/${mainJs}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, "index.html"), html, "utf8");
console.log(`Wrote dist/client/index.html (entry: assets/${mainJs})`);
