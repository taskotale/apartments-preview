import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const base = '/private/tmp/claude-501/-Users-taskotale-repos-portfolio-mujic-me/92a69b88-5902-4a87-bae8-e74528df4526/scratchpad/photos';
const COLS = 4, THUMB_W = 340, THUMB_H = 240, PER_SHEET = 16, LABEL_H = 22;

for (const prop of ['mare-e-monti-bar', 'dolce-dimora']) {
  const dir = join(base, prop);
  const files = readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
  for (let s = 0; s * PER_SHEET < files.length; s++) {
    const batch = files.slice(s * PER_SHEET, (s + 1) * PER_SHEET);
    const rows = Math.ceil(batch.length / COLS);
    const cellH = THUMB_H + LABEL_H;
    const composites = [];
    for (let i = 0; i < batch.length; i++) {
      const col = i % COLS, row = Math.floor(i / COLS);
      const img = await sharp(join(dir, batch[i])).resize(THUMB_W, THUMB_H, { fit: 'cover' }).toBuffer();
      composites.push({ input: img, left: col * THUMB_W, top: row * cellH });
      const label = Buffer.from(`<svg width="${THUMB_W}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="8" y="16" font-family="Helvetica" font-size="14" fill="#fff">${batch[i]}</text></svg>`);
      composites.push({ input: label, left: col * THUMB_W, top: row * cellH + THUMB_H });
    }
    await sharp({ create: { width: COLS * THUMB_W, height: rows * cellH, channels: 3, background: '#222' } })
      .composite(composites).jpeg({ quality: 80 }).toFile(join(base, `${prop}-sheet-${s + 1}.jpg`));
    console.log(`${prop}-sheet-${s + 1}.jpg (${batch.length} photos)`);
  }
}
