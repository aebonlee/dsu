/**
 * 커리큘럼 라벨 영문화 — 배지·교시·시간·난이도처럼 짧은 정형 문구.
 * 본문(제목·목표·내용·프롬프트)은 오버레이(./index.ts)가 담당하고,
 * 여기서는 courses.ts 의 규칙적인 라벨만 규칙 변환한다.
 */

/** '모듈 1' → 'Module 1', '1~2교시' → 'Periods 1–2' */
export function badgeEn(badge: string): string {
  const module = badge.match(/^모듈\s*(\d+)$/);
  if (module) return `Module ${module[1]}`;
  const range = badge.match(/^(\d+)\s*~\s*(\d+)교시$/);
  if (range) return `Periods ${range[1]}–${range[2]}`;
  const single = badge.match(/^(\d+)교시$/);
  if (single) return `Period ${single[1]}`;
  return badge;
}

/** '1교시' → 'Period 1', '1강' → 'Session 1' */
export function periodEn(period: string): string {
  const p = period.match(/^(\d+)교시$/);
  if (p) return `Period ${p[1]}`;
  const s = period.match(/^(\d+)강$/);
  if (s) return `Session ${s[1]}`;
  return period;
}

/** '60분' → '60 min', '약 15분' → 'About 15 min' */
export function timeEn(time: string): string {
  return time
    .replace(/^약\s*/, 'About ')
    .replace(/(\d+)\s*분/, '$1 min')
    .replace(/(\d+)\s*시간/, '$1 h');
}

const DIFFICULTY: Record<string, string> = {
  입문: 'Beginner',
  기초: 'Foundational',
  보통: 'Intermediate',
  도전: 'Advanced',
};

export const difficultyEn = (level: string): string => DIFFICULTY[level] ?? level;
