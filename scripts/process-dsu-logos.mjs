/**
 * 동신대학교 시그니처 후처리 (공식 UI 페이지 PNG 원본 사용)
 *  원본: public/images/logo/dsu-signature-ko.png / dsu-signature-mix.png
 *        (한 캔버스에 가로형·상하형·세로형이 함께 배치된 판형)
 *  1) 상단 가로형 시그니처만 잘라내기 → 흰 배경 투명 PNG (라이트 모드 네비용)
 *  2) 흰색 녹아웃 PNG (다크 네비/푸터용)
 *  3) 심벌마크(방패+매)만 잘라 favicon용 PNG 생성
 *  4) 로고타입에서 동신청색 실제 RGB 샘플링해 출력
 * 실행: node scripts/process-dsu-logos.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGO = join(__dirname, '..', 'public', 'images', 'logo');

const WHITE_THRESHOLD = 238;

/** 상단 가로형 밴드 추출 → 여백 트림 */
async function topBand(srcRel, bandH) {
  const src = join(LOGO, srcRel);
  const meta = await sharp(src).metadata();
  const band = await sharp(src)
    .extract({ left: 0, top: 0, width: meta.width, height: bandH })
    .flatten({ background: '#ffffff' })
    .toBuffer();
  return sharp(band).trim({ threshold: 15 }).toBuffer();
}

/** 흰 배경 투명화(+옵션: 잉크를 흰색으로 녹아웃) */
async function keyWhite(buf, outRel, { white = false } = {}) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      data[i + 3] = 0;
    } else if (white) {
      const ink = 255 - Math.min(r, g, b);
      data[i] = 255; data[i + 1] = 255; data[i + 2] = 255;
      data[i + 3] = Math.max(data[i + 3], ink);
    }
  }
  await sharp(data, { raw: { width, height, channels } }).png().toFile(join(LOGO, outRel));
  console.log('✓', outRel, `${width}x${height}`);
}

/** 진한 파랑 계열 픽셀의 최빈 색 샘플링 (동신청색 실측) */
async function sampleBrandColor(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const count = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (b > 100 && b > r + 40 && b > g + 30 && r < 120) {
      const key = `${r},${g},${b}`;
      count.set(key, (count.get(key) || 0) + 1);
    }
  }
  const top = [...count.entries()].sort((a, b) => b[1] - a[1])[0];
  if (top) {
    const [r, g, b] = top[0].split(',').map(Number);
    const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
    console.log('동신청색 실측:', hex, `(빈도 ${top[1]})`);
  }
}

/* ── 국문 가로형 (네비 기본) ── */
const ko = await topBand('dsu-signature-ko.png', 400);
await keyWhite(ko, 'logo-horizontal-ko.png');
await keyWhite(ko, 'logo-horizontal-ko-white.png', { white: true });
await sampleBrandColor(ko);

/* ── 혼용 가로형 (국문+영문, 푸터/OG용) ── */
const mix = await topBand('dsu-signature-mix.png', 420);
await keyWhite(mix, 'logo-horizontal.png');
await keyWhite(mix, 'logo-horizontal-white.png', { white: true });

/* ── 심벌마크만 (favicon·앱아이콘용): 가로형 밴드의 왼쪽 정사각 ── */
const meta = await sharp(ko).metadata();
const side = meta.height;
const symbolBand = await sharp(ko)
  .extract({ left: 0, top: 0, width: Math.min(side + 40, meta.width), height: side })
  .flatten({ background: '#ffffff' })
  .toBuffer();
const symbol = await sharp(symbolBand).trim({ threshold: 15 }).toBuffer();
await keyWhite(symbol, 'dsu-symbol.png');
console.log('완료');
