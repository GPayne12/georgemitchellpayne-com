/**
 * Rasterize public/favicon.svg into the PNG + ICO set the Layout references.
 * Run from the app root: node scripts/build-favicon.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'public/favicon.svg';
const svg = readFileSync(SRC);

const png = (size) =>
  sharp(svg, { density: 512 }).resize(size, size, { fit: 'fill' }).png().toBuffer();

// ── PNG outputs ───────────────────────────────────────────────────────────
const p32 = await png(32);
const p180 = await png(180);
writeFileSync('public/favicon-32x32.png', p32);
writeFileSync('public/apple-touch-icon.png', p180);

// ── ICO container (PNG-encoded 16 + 32, matching the previous file) ───────
const p16 = await png(16);
const entries = [
  { size: 16, buf: p16 },
  { size: 32, buf: p32 },
];

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(entries.length, 4);

const dirSize = 16 * entries.length;
let offset = header.length + dirSize;
const dir = Buffer.concat(
  entries.map(({ size, buf }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size, 0); // width
    e.writeUInt8(size, 1); // height
    e.writeUInt8(0, 2); // palette count
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    return e;
  })
);

writeFileSync(
  'public/favicon.ico',
  Buffer.concat([header, dir, ...entries.map((e) => e.buf)])
);

// ── Legibility proof sheet: each size upscaled 8x, nearest neighbour ──────
const tiles = await Promise.all(
  [16, 32, 64].map(async (s) => {
    const b = await png(s);
    return sharp(b)
      .resize(s * 8, s * 8, { kernel: 'nearest' })
      .extend({ top: 8, bottom: 8, left: 8, right: 8, background: '#ffffff' })
      .toBuffer();
  })
);
const heights = [16, 32, 64].map((s) => s * 8 + 16);
const widths = heights;
const sheetW = widths.reduce((a, b) => a + b, 0);
const sheetH = Math.max(...heights);
let x = 0;
const composite = [];
for (let i = 0; i < tiles.length; i++) {
  composite.push({ input: tiles[i], top: 0, left: x });
  x += widths[i];
}
await sharp({
  create: {
    width: sheetW,
    height: sheetH,
    channels: 4,
    background: '#ffffff',
  },
})
  .composite(composite)
  .png()
  .toFile('/tmp/favicon-proof.png');

console.log('wrote favicon-32x32.png, apple-touch-icon.png, favicon.ico');
console.log('proof sheet: /tmp/favicon-proof.png (16 / 32 / 64 px at 8x)');
