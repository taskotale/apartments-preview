// One-time helper: stitch a static map of Bar from OSM tiles (z15, 3x2 grid),
// add a location marker + attribution, write to both photo folders.
import sharp from 'sharp';

const Z = 15, X0 = 18121, Y0 = 12151, COLS = 3, ROWS = 2;
const MARKER = { x: 430, y: 264 }; // K Residence (42.0977, 19.1017)

const tiles = [];
for (let dy = 0; dy < ROWS; dy++) {
  for (let dx = 0; dx < COLS; dx++) {
    const url = `https://tile.openstreetmap.org/${Z}/${X0 + dx}/${Y0 + dy}.png`;
    const res = await fetch(url, { headers: { 'User-Agent': 'apartments-site-builder/1.0 (one-time static map; taskotale@gmail.com)' } });
    if (!res.ok) throw new Error(`tile ${url} -> ${res.status}`);
    tiles.push({ input: Buffer.from(await res.arrayBuffer()), left: dx * 256, top: dy * 256 });
    await new Promise((r) => setTimeout(r, 300));
  }
}

const marker = Buffer.from(`<svg width="44" height="58" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 2C11.5 2 3 10.5 3 21c0 13.5 19 35 19 35s19-21.5 19-35C41 10.5 32.5 2 22 2z" fill="#c2452d" stroke="#fff" stroke-width="3"/>
  <circle cx="22" cy="21" r="7" fill="#fff"/>
</svg>`);
const attr = Buffer.from(`<svg width="240" height="22" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="22" fill="white" fill-opacity="0.78"/>
  <text x="232" y="15" text-anchor="end" font-family="Helvetica,Arial" font-size="11" fill="#333">© OpenStreetMap contributors</text>
</svg>`);

const out = await sharp({ create: { width: COLS * 256, height: ROWS * 256, channels: 3, background: '#eee' } })
  .composite([
    ...tiles,
    { input: marker, left: MARKER.x - 22, top: MARKER.y - 56 },
    { input: attr, left: COLS * 256 - 240, top: ROWS * 256 - 22 },
  ])
  .jpeg({ quality: 88 })
  .toBuffer();

for (const dir of ['mare', 'dolce']) {
  await sharp(out).toFile(new URL(`../src/assets/photos/${dir}/map-bar.jpg`, import.meta.url).pathname);
}
console.log('map-bar.jpg written to both photo folders (768x512)');
