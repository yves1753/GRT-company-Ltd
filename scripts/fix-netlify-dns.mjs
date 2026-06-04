/**
 * Fixes apex SSL for Netlify DNS: replaces dual-IP NETLIFY apex with a single A → 75.2.60.5.
 * Requires: NETLIFY_AUTH_TOKEN. On Windows with TLS issues, use: npm run fix:netlify-dns:curl
 */
const DOMAIN = "grtcompanylimited.com";
const GOOD_A_IP = "75.2.60.5";
const BAD_A_IP = "99.83.190.102";
const API = "https://api.netlify.com/api/v1";

const token = process.env.NETLIFY_AUTH_TOKEN?.trim();
if (!token) {
  console.error("Set NETLIFY_AUTH_TOKEN (Netlify → Applications → Personal access tokens).");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function api(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${options.method ?? "GET"} ${path} → ${res.status}: ${body}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

const zones = await api("/dns_zones");
const zone = zones.find((z) => z.name === DOMAIN);
if (!zone) {
  console.error(`No DNS zone found for ${DOMAIN}.`);
  process.exit(1);
}

console.log(`DNS zone: ${zone.name} (${zone.id})`);

const records = await api(`/dns_zones/${zone.id}/dns_records`);
const hasGoodApexA = records.some(
  (r) => r.type === "A" && r.hostname === DOMAIN && r.value === GOOD_A_IP,
);

if (!hasGoodApexA) {
  const apexNetlify = records.find(
    (r) => r.type === "NETLIFY" && r.hostname === DOMAIN && r.managed,
  );
  if (apexNetlify) {
    console.log(`Removing NETLIFY apex (resolves to ${BAD_A_IP} + ${GOOD_A_IP})…`);
    await api(`/dns_zones/${zone.id}/dns_records/${apexNetlify.id}`, { method: "DELETE" });
  }
  console.log(`Adding A ${DOMAIN} → ${GOOD_A_IP}…`);
  await api(`/dns_zones/${zone.id}/dns_records`, {
    method: "POST",
    body: JSON.stringify({
      type: "A",
      hostname: DOMAIN,
      value: GOOD_A_IP,
      ttl: 3600,
    }),
  });
}

const badA = records.filter((r) => r.type === "A" && r.value === BAD_A_IP);
for (const record of badA) {
  console.log(`Deleting A ${record.hostname} → ${BAD_A_IP}`);
  await api(`/dns_zones/${zone.id}/dns_records/${record.id}`, { method: "DELETE" });
}

console.log("Done. DNS may take up to 30 min to drop the old IP. Test https://grtcompanylimited.com");
