/**
 * ============================================================
 *  동신대학교 교수자 AI 역량 강화 연수 — 강의안 PDF 생성기
 * ============================================================
 *  src/data/courses.ts 를 단일 원본(single source of truth)으로 삼아
 *  수강생 배포용 인쇄물 4종을 만든다.
 *
 *    00_동신대_AI연수_표지.pdf   — 표지 + 연수 개요 + 3일 일정
 *    01_Day1_강의안.pdf
 *    02_Day2_강의안.pdf
 *    03_Day3_강의안.pdf
 *
 *  실행:  node scripts/generate-handouts.mjs
 *  산출:  handouts/  (PDF + 편집용 HTML)
 *
 *  [사전 준비] puppeteer 는 CI 경량 유지를 위해 package.json 에 넣지 않는다.
 *  (OG 이미지 스크립트에서 sharp 를 임시 설치하는 것과 같은 방식 — CLAUDE.md §4)
 *      npm i -D puppeteer
 *  또는 다른 위치에 설치했다면:
 *      PUPPETEER_DIR=/경로/node_modules/puppeteer node scripts/generate-handouts.mjs
 * ============================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import esbuild from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'handouts');

/* ── 연수 기본 정보 (표지·머리말에 사용) ───────────────────── */
const INFO = {
  org: '동신대학교',
  title: '교수자 AI 역량 강화 연수',
  subtitle: '생성형 인공지능 A to Z — Claude 중심 교수 활용',
  period: '2026. 07. 20.(월) ~ 07. 22.(수)',
  track: '인문사회 · 예체능 트랙',
  instructor: '정동엽 교수',
  hours: '대면 12시간 + 공통 VOD 8시간',
  site: 'dsu.dreamitbiz.com',
  padlet: 'padlet.com/aebon/dsu26',
  publisher: '드림아이티비즈(DreamIT Biz)',
  publisherCeo: '이애본',
  publisherContact: 'aebon@dreamitbiz.com · 010-3700-0629 · 카카오톡 aebon',
  brand: '#0054A6',
};

const DAY_DATES = { day1: '2026. 07. 20. (월)', day2: '2026. 07. 21. (화)', day3: '2026. 07. 22. (수)' };

/* ── 영문판 (영어권 수강 교원용) ─────────────────────────────
   한국어판이 정본이고, 영문판은 같은 내용을 영어로 낸 짝이다.
   본문은 src/data/i18n/ 오버레이를 그대로 읽으므로 화면과 항상 일치한다. */
const INFO_EN = {
  org: 'Dongshin University',
  title: 'Faculty AI Competency Training',
  subtitle: 'Generative AI from A to Z — Teaching with Claude',
  period: '20–22 July 2026 (Mon–Wed)',
  track: 'Humanities & Arts track',
  instructor: 'Prof. Jeong Dong-yeop',
  hours: '12 hours in person + 8 hours common VOD',
  site: INFO.site,
  padlet: INFO.padlet,
  publisher: INFO.publisher,
  publisherCeo: INFO.publisherCeo,
  publisherContact: INFO.publisherContact,
  brand: INFO.brand,
};

const DAY_DATES_EN = { day1: 'Mon 20 July 2026', day2: 'Tue 21 July 2026', day3: 'Wed 22 July 2026' };

/** 문서 언어별 문구 */
const L = {
  ko: {
    badge: '수강생 배포용 강의안', overview: '연수 개요', howto: '이 강의안 사용법',
    schedule: '전체 일정 — 대면 3일 (12시간)', vodTitle: '사전 학습 — 공통 VOD (8시간)',
    journey: '3일 학습 여정', flow: '오늘의 흐름',
    thName: '연수명', thSub: '부제', thPeriod: '기간', thHours: '이수 시간', thTarget: '대상',
    thInstructor: '강사', thSite: '학습 사이트', thPadlet: '실습 보드', thDate: '일자',
    thComposition: '구성', thLevel: '수준', thTopic: '주제', thDetail: '세부 구성',
    thModule: '모듈', thStage: '단계', thGain: '무엇을 얻어 가시나요',
    thPeriodCol: '교시', thGoal: '학습 목표',
    goal: '학습 목표', topics: '주요 내용', practice: '실습 — Claude에 그대로 붙여넣기',
    difficulty: '난이도', importance: '중요도',
    memo: '메모 — 오늘 만든 것 / 내 과목에 적용할 것',
    bracketNote: '실습 프롬프트의 <strong>[대괄호]</strong>는 본인 과목·주제로 바꿔 주세요. 모든 프롬프트는 <strong>[역할]·[맥락]·[요청]·[형식]·[예시]·[조건]</strong> 구조를 따릅니다.',
    principle: '<mark>AI는 준비를 돕고, 생각은 사람이 합니다.</mark> 이 연수 전체를 관통하는 대원칙입니다.',
  },
  en: {
    badge: 'Participant Handout', overview: 'Programme Overview', howto: 'How to Use This Handout',
    schedule: 'Full Schedule — 3 Days in Person (12 hours)', vodTitle: 'Pre-learning — Common VOD (8 hours)',
    journey: 'The Three-Day Journey', flow: "Today's Flow",
    thName: 'Programme', thSub: 'Subtitle', thPeriod: 'Dates', thHours: 'Total hours', thTarget: 'Participants',
    thInstructor: 'Instructor', thSite: 'Learning site', thPadlet: 'Practice board', thDate: 'Date',
    thComposition: 'Structure', thLevel: 'Level', thTopic: 'Theme', thDetail: 'Sessions',
    thModule: 'Module', thStage: 'Stage', thGain: 'What you take away',
    thPeriodCol: 'Period', thGoal: 'Learning goal',
    goal: 'Learning goal', topics: 'Key content', practice: 'Practice — paste straight into Claude',
    difficulty: 'Level', importance: 'Priority',
    memo: 'Notes — what I made today / what I will use in my course',
    bracketNote: 'Replace the <strong>[bracketed]</strong> parts with your own course and topic. Every prompt follows the <strong>[Role]·[Context]·[Request]·[Format]·[Example]·[Condition]</strong> structure.',
    principle: '<mark>AI helps with the preparation; the thinking stays with people.</mark> This is the guiding principle of the whole programme.',
  },
};

/* ── TS 모듈 로드 (esbuild 로 트랜스파일 후 동적 import) ────
   화면과 같은 파일을 그대로 읽는다 — 강의안과 사이트가 어긋날 여지를 없애기 위해서다.
   각 파일의 import 는 `import type` 뿐이라 트랜스파일 시 지워진다. */
let tmpSeq = 0;
async function loadTs(relPath) {
  const src = path.join(ROOT, relPath);
  const { code } = await esbuild.transform(fs.readFileSync(src, 'utf8'), { loader: 'ts', format: 'esm' });
  const tmp = path.join(OUT_DIR, `.tmp-${tmpSeq++}.mjs`);
  fs.writeFileSync(tmp, code);
  try {
    return await import(pathToFileURL(tmp).href);
  } finally {
    fs.unlinkSync(tmp);
  }
}

/* ── 인라인 마크업 변환 (**굵게**, ==형광펜==) ─────────────── */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) =>
  esc(s)
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/* ── 공통 인쇄 스타일 ──────────────────────────────────────── */
const CSS = `
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 10.5pt; line-height: 1.65; color: #1a1a1a;
    word-break: keep-all; overflow-wrap: break-word;
  }
  h1, h2, h3, h4 { margin: 0; font-weight: 700; }
  mark { background: linear-gradient(transparent 55%, #ffe9a8 55%); padding: 0 1px; }
  .page-break { break-after: page; }

  /* ── 표지 ── */
  .cover { height: 253mm; display: flex; flex-direction: column; text-align: center; }
  .cover-top { border-top: 6px solid ${INFO.brand}; padding-top: 14mm; }
  .cover-logo { height: 11mm; margin: 0 auto 11mm; display: block; }
  .cover-org { font-size: 13pt; letter-spacing: .28em; color: ${INFO.brand}; font-weight: 700; }
  .cover-title { font-size: 30pt; line-height: 1.3; margin: 8mm 0 4mm; letter-spacing: -.02em; }
  .cover-sub { font-size: 12.5pt; color: #4a5568; }
  .cover-rule { width: 28mm; height: 3px; background: ${INFO.brand}; margin: 9mm auto; border: 0; }
  .cover-meta { font-size: 11pt; color: #2d3748; line-height: 2.1; }
  .cover-meta b { display: inline-block; min-width: 22mm; color: ${INFO.brand}; }
  .cover-foot { margin-top: auto; font-size: 9pt; color: #718096; line-height: 1.8;
                border-top: 1px solid #e2e8f0; padding-top: 6mm; }
  .cover-badge { display: inline-block; margin-top: 6mm; padding: 2.5mm 6mm; border-radius: 99px;
                 background: ${INFO.brand}; color: #fff; font-size: 10pt; font-weight: 700; }

  /* ── 속표지(Day) ── */
  .daycover { border-top: 6px solid var(--accent); padding-top: 16mm; height: 253mm;
              display: flex; flex-direction: column; }
  .daycover .kicker { font-size: 10pt; letter-spacing: .22em; color: #718096; }
  .daycover h1 { font-size: 25pt; line-height: 1.32; margin: 5mm 0 4mm; color: var(--accent); }
  .daycover .tagline { font-size: 12pt; color: #2d3748; line-height: 1.7; }
  .daycover .desc { margin-top: 8mm; font-size: 10.5pt; color: #4a5568; line-height: 1.85;
                    background: #f7fafc; border-left: 3px solid var(--accent); padding: 5mm 6mm; }

  /* ── 표 ── */
  table { width: 100%; border-collapse: collapse; margin: 5mm 0; font-size: 9.8pt; }
  th, td { border: 1px solid #cbd5e0; padding: 2.6mm 3mm; text-align: left; vertical-align: top; }
  th { background: #edf2f7; font-weight: 700; color: #2d3748; }

  /* ── 섹션 ── */
  .sec-title { font-size: 13pt; color: var(--accent); border-bottom: 2px solid var(--accent);
               padding-bottom: 2mm; margin: 0 0 5mm; }
  .chips { display: flex; flex-wrap: wrap; gap: 2mm; margin: 4mm 0 0; }
  .chip { font-size: 9pt; padding: 1.2mm 3.5mm; border-radius: 99px;
          background: #edf2f7; color: #2d3748; border: 1px solid #dde3ea; }

  /* ── 교시 블록 ── */
  /* 교시 블록은 길어서 페이지를 넘길 수 있게 둔다(막으면 빈 지면이 크게 생김).
     대신 머리말 직후·목표 블록은 쪼개지지 않도록 고정. */
  .block { margin-bottom: 7mm; }
  .block-head { background: var(--accent); color: #fff; padding: 3mm 4mm; border-radius: 2mm 2mm 0 0;
                break-after: avoid; break-inside: avoid; }
  .goal, ul.topics li { break-inside: avoid; }
  .block-head .theme { font-size: 9pt; opacity: .85; }
  .block-head h2 { font-size: 12.5pt; margin-top: 1mm; }
  .block-body { border: 1px solid #dde3ea; border-top: 0; border-radius: 0 0 2mm 2mm; padding: 5mm; }
  .meta-row { display: flex; flex-wrap: wrap; gap: 2mm; margin-bottom: 4mm; }
  .tag { font-size: 8.6pt; padding: 1mm 3mm; border-radius: 99px; border: 1px solid #cbd5e0; color: #4a5568; }
  .tag.accent { background: var(--accent); border-color: var(--accent); color: #fff; }
  .goal { background: #f0f7ff; border-left: 3px solid var(--accent); padding: 3mm 4mm; margin-bottom: 4mm;
          font-size: 10pt; }
  .goal b { color: var(--accent); }
  .label { font-size: 9.4pt; font-weight: 700; color: var(--accent); margin: 4mm 0 2mm;
           letter-spacing: .04em; }
  ul.topics { margin: 0; padding-left: 5mm; }
  ul.topics li { margin-bottom: 1.6mm; }

  /* ── 실습 프롬프트 ── */
  .practice { break-inside: avoid; border: 1px solid #dde3ea; border-radius: 2mm; margin-bottom: 3.5mm;
              overflow: hidden; }
  .practice-head { background: #f7fafc; padding: 2.2mm 3.5mm; font-size: 9.6pt; font-weight: 700;
                   color: #2d3748; border-bottom: 1px solid #e2e8f0; }
  .practice-head .n { color: var(--accent); margin-right: 2mm; }
  .practice pre { margin: 0; padding: 3.5mm; font-family: 'SF Mono', 'D2Coding', Menlo, monospace;
                  font-size: 8.6pt; line-height: 1.72; white-space: pre-wrap;
                  word-break: keep-all; overflow-wrap: break-word; color: #2d3748; background: #fff; }

  /* ── 메모 ── */
  .memo { break-inside: avoid; border: 1px dashed #cbd5e0; border-radius: 2mm; padding: 4mm 5mm; margin-top: 6mm; }
  .memo h3 { font-size: 10pt; color: #4a5568; margin-bottom: 3mm; }
  .memo .lines { height: 42mm; background: repeating-linear-gradient(
      transparent, transparent 8.4mm, #e2e8f0 8.4mm, #e2e8f0 8.6mm); }
`;

const shell = (title, accent, body, lang = 'ko') => `<!DOCTYPE html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>:root { --accent: ${accent}; }
${CSS}</style></head><body>${body}</body></html>`;

/**
 * Word 편집본(.doc) — MS Word 는 HTML 문서를 표·색상까지 그대로 열어 편집할 수 있다.
 * macOS `textutil -convert docx` 는 표를 전부 잃어버려서 쓰지 않는다(실측 확인).
 * CSS 변수는 Word 가 해석하지 못하므로 --accent 를 실제 색상값으로 치환해 굽는다.
 */
const wordDoc = (title, accent, html) =>
  html
    .replace(/<html lang="(ko|en)">/, '<html lang="$1" xmlns:w="urn:schemas-microsoft-com:office:word">')
    .replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta name="ProgId" content="Word.Document">')
    .replace(/var\(--accent\)/g, accent);

/* ── 언어별 과정 데이터 접근자 ─────────────────────────────
   한국어판·영문판이 같은 골격을 쓰도록, 언어 차이를 여기서만 흡수한다.
   영문 본문은 화면과 같은 오버레이(src/data/i18n/)를 읽으므로 둘이 어긋나지 않는다. */
function view(program, lang) {
  const en = lang === 'en';
  return {
    name: en ? program.nameEn : program.nameKo,
    tagline: en ? program.taglineEn : program.tagline,
    desc: en ? program.descEn : program.descKo,
    audience: en ? program.audienceEn : program.audience,
    duration: en ? program.durationEn : program.duration,
    level: en ? program.levelEn : program.level,
    highlights: en ? program.highlightsEn : program.highlights,
    padlet: program.padletUrl ?? (en ? INFO_EN.padlet : INFO.padlet),
    date: (en ? DAY_DATES_EN : DAY_DATES)[program.id] ?? '',
    badge: (c) => (en ? LABELS.badgeEn(c.badge) : c.badge),
    theme: (c) => (en ? c.themeEn : c.theme),
    /** 세션 본문 — 영문은 오버레이에서, 없으면 한국어로 폴백(빈 지면 방지) */
    session: (c, s, i) => {
      const o = en ? SESSIONS_EN[`${program.id}:${c.day}:${i}`] : null;
      return {
        title: o?.title ?? s.title,
        goal: o?.goal ?? s.goal,
        topics: o?.topics ?? s.topics,
        practices: o?.practices ?? s.practices,
        period: en ? LABELS.periodEn(s.period) : s.period,
        time: en ? LABELS.timeEn(s.time) : s.time,
        difficulty: s.difficulty ? (en ? LABELS.difficultyEn(s.difficulty) : s.difficulty) : '',
        importance: s.importance,
      };
    },
  };
}

/* ── 표지 문서 ─────────────────────────────────────────────── */
function buildCover(programs, logoDataUri, lang) {
  const t = L[lang];
  const I = lang === 'en' ? INFO_EN : INFO;
  const days = programs.filter((p) => p.id !== 'vod');
  const vod = programs.find((p) => p.id === 'vod');

  const scheduleRows = days
    .map((p) => {
      const v = view(p, lang);
      const themes = p.curriculum
        .map((c) => `${esc(v.badge(c))} · ${esc(v.theme(c).replace(/\s*\(\d+H\)$/, ''))}`)
        .join('<br>');
      return `<tr>
        <td style="white-space:nowrap"><b>${esc(v.name.split(' — ')[0])}</b><br>
          <span style="font-size:9pt;color:#718096">${esc(v.date)}</span></td>
        <td>${esc(v.name.split(' — ')[1] ?? v.name)}</td>
        <td style="font-size:9.2pt;color:#4a5568">${themes}</td>
      </tr>`;
    })
    .join('');

  const vodView = view(vod, lang);
  const vodRows = vod.curriculum
    .map((m) => `<tr><td style="white-space:nowrap"><b>${esc(vodView.badge(m))}</b></td>
      <td colspan="2">${esc(vodView.theme(m))}</td></tr>`)
    .join('');

  const meta =
    lang === 'en'
      ? [['Dates', I.period], ['Structure', I.hours], ['Track', I.track], ['Instructor', I.instructor]]
      : [['연수 기간', I.period], ['과정 구성', I.hours], ['대상 트랙', I.track], ['담당 강사', I.instructor]];

  const cover = `
    <section class="cover">
      <div class="cover-top">
        ${
          logoDataUri
            ? `<img class="cover-logo" src="${logoDataUri}" alt="${esc(I.org)}">`
            : `<div class="cover-org">${esc(I.org)}</div>`
        }
        <h1 class="cover-title">${esc(I.title)}</h1>
        <div class="cover-sub">${esc(I.subtitle)}</div>
        <hr class="cover-rule">
        <div class="cover-meta">
          ${meta.map(([k, v]) => `<div><b>${esc(k)}</b> ${esc(v)}</div>`).join('')}
        </div>
        <div class="cover-badge">${esc(t.badge)}</div>
      </div>
      <div class="cover-foot">
        ${esc(t.thSite)} ${esc(I.site)} · ${esc(t.thPadlet)} ${esc(I.padlet)}<br>
        ${lang === 'en' ? 'Published by' : '발행'} ${esc(I.publisher)} · ${esc(I.publisherCeo)}<br>
        ${esc(I.publisherContact)}
      </div>
    </section>
    <div class="page-break"></div>`;

  const targetNote =
    lang === 'en'
      ? `${esc(I.track)} faculty (the common VOD is required for all faculty and instructors)`
      : `${esc(I.track)} 교원 (공통 VOD는 전임교원·강사 전체 사전 필수)`;

  const howtoItems =
    lang === 'en'
      ? [
          'The handout comes in <strong>three volumes, one per day</strong>. Bring only that day’s volume.',
          'Each period follows the same order: <strong>learning goal → key content → practice prompt</strong>.',
          'The practice prompts are <mark>complete and ready to paste into Claude</mark>. Change only the <strong>[bracketed]</strong> parts to match your own course and topic.',
          'Every prompt uses the same six-part structure: <strong>[Role]·[Context]·[Request]·[Format]·[Example]·[Condition]</strong>. Once this structure is familiar, you can write any request yourself.',
          'The <strong>📦 Output</strong> line at the end of each period is what you actually make and take away in that session.',
          'Please watch the <strong>four common VOD modules (8 hours)</strong> before the in-person days.',
        ]
      : [
          '강의안은 <strong>날짜별 3권</strong>으로 나뉩니다. 수업 당일 해당 권만 준비하시면 됩니다.',
          '각 교시는 <strong>학습 목표 → 주요 내용 → 실습 프롬프트</strong> 순서로 구성됩니다.',
          '실습 프롬프트는 <mark>Claude 대화창에 그대로 복사해 붙여넣는 완성형</mark>입니다. <strong>[대괄호]</strong> 부분만 본인 과목·주제로 바꿔 주세요.',
          '프롬프트는 <strong>[역할]·[맥락]·[요청]·[형식]·[예시]·[조건]</strong> 6요소 구조로 통일되어 있습니다. 이 구조 자체를 익히시면 어떤 요청도 직접 쓰실 수 있습니다.',
          '각 교시 끝의 <strong>📦 산출물</strong>은 그 시간에 실제로 만들어 가져가시는 결과물입니다.',
          '대면 수업 전 <strong>공통 VOD 4모듈(8시간)</strong>을 먼저 시청해 주세요.',
        ];

  const overview = `
    <section>
      <h2 class="sec-title">${esc(t.overview)}</h2>
      <table>
        <tr><th style="width:26mm">${esc(t.thName)}</th><td>${esc(I.org)} ${esc(I.title)}</td></tr>
        <tr><th>${esc(t.thSub)}</th><td>${esc(I.subtitle)}</td></tr>
        <tr><th>${esc(t.thPeriod)}</th><td>${esc(I.period)}</td></tr>
        <tr><th>${esc(t.thHours)}</th><td>${esc(I.hours)}</td></tr>
        <tr><th>${esc(t.thTarget)}</th><td>${targetNote}</td></tr>
        <tr><th>${esc(t.thInstructor)}</th><td>${esc(I.instructor)}</td></tr>
        <tr><th>${esc(t.thSite)}</th><td>${esc(I.site)}</td></tr>
        <tr><th>${esc(t.thPadlet)}</th><td>${esc(I.padlet)}</td></tr>
      </table>

      <h2 class="sec-title" style="margin-top:9mm">${esc(t.howto)}</h2>
      <ul class="topics">${howtoItems.map((x) => `<li>${x}</li>`).join('')}</ul>
    </section>
    <div class="page-break"></div>`;

  const journeyRows =
    lang === 'en'
      ? [
          ['Pre-VOD', 'How AI produces text and where it fails (hallucination), prompting basics, and safe-use ground rules'],
          ['Day 1', 'An AI map for your course · 3 learning objectives · one week’s lesson plan · a debate guide · a case analysis sheet'],
          ['Day 2', 'Essay & critical items · step-by-step model answers · competency rubrics · a personalised feedback template · a source-checking routine'],
          ['Day 3', 'An AI strategy for before/during/after class · competency practice scenarios · a vibe-coded class tool · your own one-page teaching protocol'],
        ]
      : [
          ['사전 VOD', 'AI가 글을 만드는 원리와 한계(환각), 프롬프트 기본기, 안전하게 쓰는 기준'],
          ['Day 1', '내 과목의 AI 적용 지도 · 학습목표 3개 · 한 주차 강의안 · 토론 가이드 · 사례 분석지'],
          ['Day 2', '서술·논술 문항 · 단계별 모범답안 · 역량 루브릭 · 개인화 피드백 템플릿 · 출처 검증 루틴'],
          ['Day 3', '수업 전·중·후 AI 배치 전략 · 역량 연습 시나리오 · 바이브코딩 수업 도구 · 개인 교수 프로토콜 1장'],
        ];

  const schedule = `
    <section>
      <h2 class="sec-title">${esc(t.schedule)}</h2>
      <table>
        <thead><tr><th style="width:30mm">${esc(t.thDate)}</th><th style="width:52mm">${esc(t.thTopic)}</th><th>${esc(t.thDetail)}</th></tr></thead>
        <tbody>${scheduleRows}</tbody>
      </table>

      <h2 class="sec-title" style="margin-top:9mm">${esc(t.vodTitle)}</h2>
      <table>
        <thead><tr><th style="width:30mm">${esc(t.thModule)}</th><th colspan="2">${esc(t.thTopic)}</th></tr></thead>
        <tbody>${vodRows}</tbody>
      </table>

      <h2 class="sec-title" style="margin-top:9mm">${esc(t.journey)}</h2>
      <table>
        <thead><tr><th style="width:30mm">${esc(t.thStage)}</th><th>${esc(t.thGain)}</th></tr></thead>
        <tbody>${journeyRows.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join('')}</tbody>
      </table>
      <p style="margin-top:8mm;font-size:10pt;color:#4a5568">${t.principle}</p>
    </section>`;

  const title = lang === 'en' ? `${I.org} ${I.title} — Cover` : `${I.org} ${I.title} — 표지`;
  return shell(title, I.brand, cover + overview + schedule, lang);
}

/* ── Day 강의안 문서 ───────────────────────────────────────── */
function buildDay(program, lang) {
  const t = L[lang];
  const I = lang === 'en' ? INFO_EN : INFO;
  const accent = program.color || I.brand;
  const v = view(program, lang);
  const [dayLabel, dayTitle] = v.name.split(' — ');

  const cover = `
    <section class="daycover">
      <div class="kicker">${esc(I.org)} ${esc(I.title)} · ${esc(I.track)}</div>
      <h1>${esc(dayLabel)}<br>${esc(dayTitle ?? '')}</h1>
      <div class="tagline">${esc(v.tagline)}</div>
      <div class="chips">${v.highlights.map((h) => `<span class="chip">${esc(h)}</span>`).join('')}</div>
      <div class="desc">${esc(v.desc)}</div>
      <table style="margin-top:8mm">
        <tr><th style="width:26mm">${esc(t.thDate)}</th><td>${esc(v.date)}</td></tr>
        <tr><th>${esc(t.thComposition)}</th><td>${esc(v.duration)}</td></tr>
        <tr><th>${esc(t.thLevel)}</th><td>${esc(v.level)}</td></tr>
        <tr><th>${esc(t.thTarget)}</th><td>${esc(v.audience)}</td></tr>
        <tr><th>${esc(t.thInstructor)}</th><td>${esc(I.instructor)}</td></tr>
        <tr><th>${esc(t.thPadlet)}</th><td>${esc(v.padlet)}</td></tr>
      </table>
      <div style="margin-top:auto;border-top:1px solid #e2e8f0;padding-top:5mm;font-size:9pt;color:#718096">
        ${esc(I.publisher)} · ${esc(I.site)}
      </div>
    </section>
    <div class="page-break"></div>`;

  /* 오늘의 흐름 요약표 */
  const flowRows = program.curriculum
    .flatMap((c) => c.sessions.map((s, i) => v.session(c, s, i)))
    .map((s) => `<tr>
      <td style="white-space:nowrap"><b>${esc(s.period)}</b><br>
        <span style="font-size:9pt;color:#718096">${esc(s.time)}</span></td>
      <td>${esc(s.title)}</td>
      <td style="font-size:9.2pt">${esc(s.goal)}</td>
    </tr>`)
    .join('');

  const flow = `
    <section>
      <h2 class="sec-title">${esc(t.flow)}</h2>
      <table>
        <thead><tr><th style="width:20mm">${esc(t.thPeriodCol)}</th><th style="width:56mm">${esc(t.thTopic)}</th><th>${esc(t.thGoal)}</th></tr></thead>
        <tbody>${flowRows}</tbody>
      </table>
      <p style="font-size:9.6pt;color:#4a5568;margin-top:4mm">${t.bracketNote}</p>
    </section>
    <div class="page-break"></div>`;

  /* 교시별 본문 */
  const blocks = program.curriculum
    .map((c) =>
      c.sessions
        .map((raw, si) => {
          const s = v.session(c, raw, si);
          const tags = [
            `<span class="tag accent">${esc(s.period)}</span>`,
            `<span class="tag">${esc(s.time)}</span>`,
            s.difficulty ? `<span class="tag">${esc(t.difficulty)} ${esc(s.difficulty)}</span>` : '',
            s.importance ? `<span class="tag">${esc(t.importance)} ${'★'.repeat(s.importance)}</span>` : '',
          ].join('');

          const topics = s.topics.map((x) => `<li>${inline(x)}</li>`).join('');
          const practiceLabel = lang === 'en' ? 'Practice' : '실습';
          const practices = s.practices
            .map(
              (pr, i) => `<div class="practice">
                <div class="practice-head"><span class="n">${practiceLabel} ${i + 1}</span>${esc(pr.scenario)}</div>
                <pre>${esc(pr.prompt)}</pre>
              </div>`,
            )
            .join('');

          return `<div class="block">
            <div class="block-head">
              <div class="theme">${esc(v.badge(c))} · ${esc(v.theme(c))}</div>
              <h2>${esc(s.period)} · ${esc(s.title)}</h2>
            </div>
            <div class="block-body">
              <div class="meta-row">${tags}</div>
              <div class="goal"><b>${esc(t.goal)}</b> ${esc(s.goal)}</div>
              <div class="label">${esc(t.topics)}</div>
              <ul class="topics">${topics}</ul>
              <div class="label">${esc(t.practice)}</div>
              ${practices}
            </div>
          </div>`;
        })
        .join(''),
    )
    .join('');

  const memo = `
    <div class="memo">
      <h3>${esc(t.memo)}</h3>
      <div class="lines"></div>
    </div>`;

  return shell(`${I.title} — ${v.name}`, accent, cover + flow + blocks + memo, lang);
}

/* ── PDF 출력 ──────────────────────────────────────────────── */
async function renderPdfs(docs) {
  const puppeteerDir = process.env.PUPPETEER_DIR;
  const puppeteer = (await import(puppeteerDir ? pathToFileURL(puppeteerDir).href : 'puppeteer')).default;

  const browser = await puppeteer.launch();
  try {
    for (const { file, html, lang } of docs) {
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'load' });
      await page.pdf({
        path: path.join(OUT_DIR, `${file}.pdf`),
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `<div style="width:100%;font-size:8pt;color:#a0aec0;
          font-family:'Apple SD Gothic Neo',sans-serif;padding:0 16mm;display:flex;
          justify-content:space-between;">
          <span>${lang === 'en' ? `${INFO_EN.org} ${INFO_EN.title}` : `${INFO.org} ${INFO.title}`}</span>
          <span class="pageNumber"></span>
        </div>`,
        margin: { top: '18mm', bottom: '20mm', left: '16mm', right: '16mm' },
      });
      await page.close();
      console.log(`  ✓ ${file}.pdf`);
    }
  } finally {
    await browser.close();
  }
}

/* ── main ──────────────────────────────────────────────────── */
fs.mkdirSync(OUT_DIR, { recursive: true });

const programs = (await loadTs('src/data/courses.ts')).PROGRAMS;

/** 영문 세션 오버레이 — 화면(src/data/i18n/)과 같은 원본 */
const SESSIONS_EN = {
  ...(await loadTs('src/data/i18n/vod-en.ts')).VOD_EN,
  ...(await loadTs('src/data/i18n/day1-en.ts')).DAY1_EN,
  ...(await loadTs('src/data/i18n/day2-en.ts')).DAY2_EN,
  ...(await loadTs('src/data/i18n/day3-en.ts')).DAY3_EN,
};
const LABELS = await loadTs('src/data/i18n/labels.ts');

// 가로형 국문 시그니처(1267×221) — 세로 시그니처 시트는 표지에 부적합
const logoPath = path.join(ROOT, 'public/images/logo/logo-horizontal-ko.png');
const logoDataUri = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
  : null;

const days = programs.filter((p) => p.id.startsWith('day')).sort((a, b) => a.order - b.order);

const docs = [
  // ── 한국어판 (정본) ──
  {
    file: `00_${INFO.org}_AI연수_표지`,
    slug: 'cover', // 웹 배포용 ASCII 파일명 (한글 파일명은 URL 인코딩 문제를 부른다)
    lang: 'ko',
    accent: INFO.brand,
    html: buildCover(programs, logoDataUri, 'ko'),
  },
  ...days.map((p, i) => ({
    file: `0${i + 1}_Day${i + 1}_강의안`,
    slug: p.id, // day1 · day2 · day3 — 사이트 사이드바 다운로드 링크와 짝을 맞춘다
    lang: 'ko',
    accent: p.color || INFO.brand,
    html: buildDay(p, 'ko'),
  })),
  // ── 영문판 (영어권 수강 교원용) ──
  {
    file: '00_Dongshin_AI_Training_Cover_EN',
    slug: 'cover-en',
    lang: 'en',
    accent: INFO.brand,
    html: buildCover(programs, logoDataUri, 'en'),
  },
  ...days.map((p, i) => ({
    file: `0${i + 1}_Day${i + 1}_Handout_EN`,
    slug: `${p.id}-en`,
    lang: 'en',
    accent: p.color || INFO.brand,
    html: buildDay(p, 'en'),
  })),
];

console.log('강의안 생성 중…');
for (const { file, accent, html } of docs) {
  fs.writeFileSync(path.join(OUT_DIR, `${file}.html`), html);
  fs.writeFileSync(path.join(OUT_DIR, `${file}.doc`), wordDoc(file, accent, html));
}
await renderPdfs(docs);

/* ── 사이트 배포본 복사 (public/handouts/) ─────────────────
   사이트 좌측 과정 메뉴 상단의 "강의안 다운로드"가 이 경로를 가리킨다.
   한글 파일명은 gh-pages 경로에서 인코딩 사고를 부르므로 ASCII 슬러그로 복사한다. */
const PUBLIC_DIR = path.join(ROOT, 'public/handouts');
fs.mkdirSync(PUBLIC_DIR, { recursive: true });
for (const { file, slug } of docs) {
  for (const ext of ['pdf', 'doc']) {
    fs.copyFileSync(path.join(OUT_DIR, `${file}.${ext}`), path.join(PUBLIC_DIR, `dsu-${slug}.${ext}`));
  }
}
console.log(`  ✓ 사이트 배포본 → public/handouts/ (dsu-<cover|day1|day2|day3>.pdf|.doc)`);

console.log(`\n완료 → ${OUT_DIR}`);
