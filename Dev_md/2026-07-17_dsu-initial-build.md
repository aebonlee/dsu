# 개발일지 — dsu 동신대학교 교수자 AI 역량 강화 연수 (초기 구축)

- 날짜: 2026-07-17
- 리포: https://github.com/aebonlee/dsu
- 배포: https://dsu.dreamitbiz.com (gh-pages 수동 배포, `npm run deploy`)
- 강의: 2026.07.20(월)~22(수) 정동엽 교수, 인문사회·예체능 트랙

## 1. 개요

동신대학교 12시간 교수자 연수 학습사이트를 mju(명지대 교수자 연수, React19/Vite7/TS/Supabase) 베이스로 이식해 구축.

**과정 구조 (menuItems):**
| 경로 | 과정 | 구성 |
|------|------|------|
| /courses/vod | 공통 VOD — 생성형 AI 기초 다지기 | 4모듈 × 2H (타 강사 녹화영상 사전학습): LLM 원리 / 프롬프트 엔지니어링 / 학습자료 제작 / 평가·품질관리 & AI 윤리 — 총 17차시 |
| /courses/day1 | Day 1 — 서사·토론·글쓰기 수업 목표 구조화 | 4교시(4H): AI 적용 지도 / 학습목표·강의안 / 토론 가이드·발문·분석지 / 수준별 변환 |
| /courses/day2 | Day 2 — 서술형·비판형 평가 문항 설계 | 4교시(4H): 평가 5유형 / 문항+3수준 모범답안 / 역량 루브릭 / 피드백 확장+출처 검증 |
| /courses/day3 | Day 3 — AI 활용 교수 프로토콜 & 바이브코딩 | 4교시(4H): 수업 전·중·후 전략 / 역량 연습 시나리오 / 바이브코딩 도구 / 개인 프로토콜 |
| /prompt-eval | 프롬프트 학습·평가 | 학습(4가이드) + 작성 평가(SCORE 자동채점) + 종합 실습(250점) — mju 범용 콘텐츠 유지 |

**콘텐츠 톤:** 교수자 대상이지만 "중학생에게 설명하듯" 아주 기초부터 항목별 구성. 모든 실습 프롬프트는 Claude에 복사-붙여넣기 가능한 완성형(요청형 어투 "~해줘").

## 2. 주요 작업

### 데이터(콘텐츠) 전면 재작성
- `src/data/courses.ts` — 4개 Program(vod/day1/day2/day3), 29차시, 세션마다 goal(Bloom 표기)+topics(항목별+📦산출물)+practices(Claude 프롬프트 2개)
- `src/data/materials.ts` — 카테고리 vod/day1/day2/day3 × 학습자료 10종(LLM 기초/프롬프트 4요소/템플릿 10선/윤리 기준표/AI 적용 지도/학습목표 가이드/토론 템플릿/문항 설계/루브릭/출처 검증/전략 워크시트/바이브코딩/프로토콜 양식) — 마크다운 상세 가이드
- `src/data/handsOn.ts` — 과정별 따라하기 랩 12개(vod 3 + day1 3 + day2 3 + day3 3), 단계별 prompt+check 포함
- `src/pages/Home.tsx`, `About.tsx`, `translations.ts` — dsu 텍스트로 재작성 (progVod/progDay1~3 키 추가)
- `src/pages/appendix/data/glossary.ts` — 명지대 전용 항목 수정

### 동신대 CI 적용
- 공식 UI 페이지(dsu.ac.kr)에서 시그니처 원본 확보:
  - `시그니처국문.ai`, `시그니처혼용.ai` (리포 루트 — 원본 보관용)
  - `public/images/logo/dsu-signature-ko.png`, `dsu-signature-mix.png` (공식 PNG)
- `scripts/process-dsu-logos.mjs` (신규): 가로형 밴드 크롭 → 흰배경 투명화/화이트 녹아웃 → `logo-horizontal-ko(.–white).png`, `logo-horizontal(-white).png`, `dsu-symbol.png`(방패 심벌, favicon용) 생성
- **동신청색 실측 #0054A6** (시그니처 PNG 최빈색 샘플링, 공식 표기 C100 M75 / DIC184)
- `base.css`/`site.css`: :root 및 `html[data-color="mju"]` 컬러셋 값을 동신청색 팔레트로 교체
  - ⚠️ 컬러 테마 키 이름(mju/academic/research/vibe)은 CSS·ThemeContext 하위호환 위해 유지, **값만 교체**
- `favicon.svg` 동신대 방패 심벌로 교체, OG 이미지 재생성(`generate-og-image.mjs` CONFIG 수정)

### 설정·인프라
- `src/config/site.ts`: id dsu, dbPrefix `dsu_`, url dsu.dreamitbiz.com, themeColor #0054A6, shop:false, menuItems 재구성
- `index.html`: 메타/OG/canonical dsu로, favicon → `/images/logo/dsu-symbol.png`
- CNAME(루트·public) = dsu.dreamitbiz.com, vite base '/' (커스텀 도메인 — /dsu/ 아님 주의)
- `sql/dsu-schema.sql`: mju 스키마의 dsu_ 접두사 변환본 (**Supabase SQL Editor에서 아직 미실행** — 게시판/실습점수 사용 전 실행 필요)
- Supabase fallback URL/anon key 하드코딩 유지(클린 빌드 로그인 보호)
- `src/utils/posts.ts`: 하드코딩 `mju_comments` → `dsu_comments` 수정

## 3. 사고·복구 기록

- 대표가 dsu 폴더에 넣어둔 `시그니처국문.ai`/`시그니처혼용.ai`를 베이스 정리 중 mju 잔재로 오인해 **rm으로 삭제**(복구 불가). → 동신대 공식 홈페이지 UI 자료실에서 동일 원본(.ai) + PNG를 재다운로드해 복구 완료. 교훈: 복사 직후 생긴 파일은 삭제 전 출처 확인.
- dsu.ac.kr 서버는 일반 curl 요청이 0바이트로 멈춤 → `curl --http1.1 -H "Connection: close"` 조합으로 다운로드 성공 (재방문 시 참고).

## 4. 검증

- `tsc -b` 통과, `vite build` 성공 (SubscribePrompt 청크 500kB+ 경고는 mju 때부터 존재, 기능 무관)
- 잔여 "명지대/Myongji" 문자열 전수 검색 후 제거 완료

## 5. 남은 일 / 운영 메모

- [ ] Supabase SQL Editor에서 `sql/dsu-schema.sql` 실행 (게시판·실습점수·구독 테이블)
- [ ] DNS: dsu.dreamitbiz.com CNAME → aebonlee.github.io 확인 (기존 서브도메인 패턴과 동일)
- [ ] GitHub Pages build_type이 legacy면 gh-pages 브랜치 + 커스텀 도메인으로 설정 확인
- [ ] VOD 영상 링크(타 강사 녹화영상) 수령 시 vod 과정에 임베드 예정

## 6. 배포 후 빈 페이지 사건 (해결)

- 증상: dsu.dreamitbiz.com 접속 시 빈 페이지.
- 원인: Pages 소스를 main(legacy)→gh-pages로 전환했지만, **전환 전 main 빌드가 계속 서빙**됨. HTML이 `/src/main.tsx`(소스)를 참조해 JS 로드 실패.
- 조치: `gh api -X POST repos/aebonlee/dsu/pages/builds`로 재빌드 트리거 → `/assets/index-*.js` 정상 서빙 확인.
- 교훈: **Pages 소스 브랜치를 전환한 뒤에는 반드시 builds POST(또는 gh-pages 재푸시)로 재빌드를 트리거하고, 서빙 HTML이 dist본인지(`/assets/` 참조) 확인할 것.**

## 7. 2차 보완 (대표 피드백 반영)

- 메뉴 라벨 형식: "공통VOD : 추가학습자료 / Day1 : 목표 구조화 / Day2 : 평가 설계 / Day3 : 교수 프로토콜"
- Day1~3 과정 헤더에 패들릿 버튼 추가 — [동신대] 생성형인공지능 A to Z 특강 (padlet.com/aebon/dsu26), Program에 padletUrl/padletLabel 필드 신설
- 홈에서 연수현황(Stats)·CTA(무료 회원가입) 섹션 삭제
- 콘텐츠 보강: Day1~3 각 교시 실습 프롬프트 1개씩 추가(12개, 역할·맥락·형식·조건 포함 상세형), 학습자료 4종 신규(수준별·문체별 변환 템플릿집 / 평가 문항 예시 은행 / 바이브코딩 도구 아이디어 20선 / PBL 시나리오 예시집) → 총 17종
- 사고: materials.ts 추가분이 python 치환 오류로 MATERIAL_CATEGORIES 안에 이스케이프 깨진 채 삽입 → 블록 재배치 + 이중 이스케이프 백틱 42개 수정으로 복구, tsc 통과
- "메뉴 클릭 안 됨/빈 화면" 재확인: 재빌드 후 실제 브라우저에서 홈·Day1 라우팅과 렌더링 정상 확인(빈 화면은 구버전 캐시), 홈 히어로의 첫 로드 공백은 AOS 등장 애니메이션 타이밍

- 컨테이너 최대 폭 1280px → 1450px 확대(--container-max, 전 페이지 공통 변수라 한 곳 수정으로 반영)

## 8. 실습 프롬프트 정석 구조 전면 재작성

- 커리큘럼 실습 프롬프트 71개(courses.ts) + 따라하기 랩 프롬프트 30개(handsOn.ts)를 전부
  **[역할]·[맥락]·[요청]·[형식]·[예시]·[조건]** 라벨이 명시된 정석 구조로 재작성
- 역할에 "10년차 전문가" 등 구체성 부여, [예시]에는 원하는 결과물의 견본 한 줄(Few-shot) 포함
- 같은 대화의 후속 요청은 [요청]·[조건]만 쓰는 축약형으로 — 축약이 가능한 이유를 괄호 설명으로 학습 포인트화
- VOD 모듈2 1강 제목을 "역할·맥락·형식·예시(+단계)"로 갱신해 [예시] 요소를 커리큘럼에도 반영
- 컨테이너 폭 1450px 적용 확인(실측), tsc·build 통과, gh-pages 재배포
