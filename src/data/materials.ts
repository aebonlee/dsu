export interface MaterialCategory {
  id: string;
  nameKo: string;
  nameEn: string;
  icon: string;
  descKo: string;
  descEn: string;
}

export interface MaterialItem {
  id: string;
  categoryId: string;
  nameKo: string;
  nameEn: string;
  type: 'guide' | 'template' | 'reference';
  contentKo: string;
  contentEn: string;
}

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  { id: 'vod', nameKo: '공통 VOD 자료', nameEn: 'Common VOD', icon: 'fa-circle-play', descKo: 'LLM 원리·프롬프트·학습자료 제작·평가와 AI 윤리 — 사전 영상학습 보조 자료입니다.', descEn: 'Companion materials for the pre-recorded VOD modules.' },
  { id: 'day1', nameKo: 'Day 1 자료', nameEn: 'Day 1', icon: 'fa-comments', descKo: '서사·토론·글쓰기 수업 목표 구조화 — 학습목표·강의안·토론 가이드 자료입니다.', descEn: 'Materials for structuring goals in narrative, debate & writing courses.' },
  { id: 'day2', nameKo: 'Day 2 자료', nameEn: 'Day 2', icon: 'fa-file-signature', descKo: '서술형·비판형 평가 문항 설계 — 문항·모범답안·루브릭·피드백 자료입니다.', descEn: 'Materials for designing essay & critical-thinking assessments.' },
  { id: 'day3', nameKo: 'Day 3 자료', nameEn: 'Day 3', icon: 'fa-wand-magic-sparkles', descKo: 'AI 활용 교수 프로토콜 & 바이브코딩 — 수업 전략·도구 제작·프로토콜 자료입니다.', descEn: 'Materials for AI teaching protocols & vibe coding.' },
];

export const MATERIALS: MaterialItem[] = [
  /* ═══════════════════════════════════════
     공통 VOD
     ═══════════════════════════════════════ */
  {
    id: 'vod-llm-basics',
    categoryId: 'vod',
    nameKo: 'LLM 작동 원리 완전 기초',
    nameEn: 'LLM Basics from Zero',
    type: 'guide',
    contentKo: `## 생성형 AI, 정말 쉬운 설명에서 시작합니다

### 1. AI는 "다음 단어 맞히기" 선수입니다

휴대폰에서 문자를 쓸 때 "오늘 점심"까지 입력하면 "뭐 먹지?"가 추천으로 뜨는 걸 보신 적 있으시죠?
**생성형 AI는 이 "다음 단어 추천"을 아주아주 잘하는 기계입니다.**

- 휴대폰 자동완성: 내가 쓴 문자 몇천 개를 보고 다음 단어를 추천
- 생성형 AI(Claude): **책 수억 권 분량의 글**을 보고 다음 단어를 예측

"다음 단어 하나"를 잘 맞히는 걸 수천 번 반복하면? 문장이 되고, 문단이 되고, 강의계획서 한 편이 됩니다. 이게 전부입니다. 마법이 아니에요.

### 2. LLM이라는 이름의 뜻

- **L**arge — 크다 (학습한 글의 양이 어마어마하게)
- **L**anguage — 언어를
- **M**odel — 흉내 내는 수학 모형

그래서 "대규모 언어 모델"이라고 부릅니다. Claude, ChatGPT, Gemini 모두 LLM입니다.

### 3. 꼭 기억할 한 가지: AI는 "이해"하지 않습니다

AI는 **"그럴듯한 문장을 만드는 것"**이지, 사실을 확인하고 답하는 게 아닙니다.

| 사람 | AI |
|------|-----|
| 아는 것을 떠올려 답한다 | 그럴듯한 다음 단어를 계산해 답한다 |
| 모르면 "모른다"고 한다 | 모르면 그럴듯하게 **지어낼 수 있다** |
| 책임을 진다 | 책임지지 않는다 (책임은 사용자) |

### 4. 환각(Hallucination) — AI의 그럴듯한 거짓말

AI가 지어낸 가짜 정보를 **환각**이라고 부릅니다.

**실제로 자주 일어나는 환각:**
- 존재하지 않는 논문 제목과 저자를 그럴듯하게 만들어냄
- 통계 수치를 지어냄 ("2024년 조사에 따르면 73%가…" ← 조사 자체가 없음)
- 유명인의 가짜 명언을 만들어냄

**환각 대처 3단계:**
1. **의심하기** — 이름·숫자·날짜·인용은 일단 "미확인"으로 취급
2. **출처 요구하기** — "이 정보의 출처를 알려줘"
3. **원본 확인하기** — 도서관, 구글 스칼라, 공식 홈페이지에서 직접 확인

### 5. 그럼에도 왜 쓰는가?

환각이 있어도 AI가 강력한 이유: **"초안 만들기"는 압도적으로 잘하기 때문입니다.**

- 빈 화면에서 시작하는 것 vs 70점짜리 초안에서 시작하는 것
- 교수님의 역할: 70점 초안을 **검증하고 다듬어 100점으로** 만드는 것

> 💡 **핵심 문장 하나만 기억하세요:**
> "AI는 초안 담당, 검증과 책임은 나."`,
    contentEn: `## LLM Basics\n\nGenerative AI predicts the next word, like phone autocomplete trained on billions of pages. It does not "understand" — it generates plausible text, which is why hallucinations (fabricated papers, statistics, quotes) happen. Rule: AI drafts, you verify and take responsibility.`,
  },
  {
    id: 'vod-prompt-4',
    categoryId: 'vod',
    nameKo: '프롬프트 4요소 가이드 (역할·맥락·형식·단계)',
    nameEn: 'The 4 Elements of a Good Prompt',
    type: 'guide',
    contentKo: `## 좋은 프롬프트의 4요소

**프롬프트 = AI에게 보내는 업무 요청서**입니다. 신입 조교에게 일을 맡긴다고 상상해 보세요. "자료 좀 만들어줘"라고만 하면 엉뚱한 게 나오지만, 자세히 설명하면 제대로 해 옵니다. AI도 똑같습니다.

### ① 역할 (Role) — "너는 누구인가"

AI에게 어떤 전문가처럼 답할지 정해줍니다.

- ❌ "토론 주제 추천해줘"
- ✅ "**너는 대학 교양 수업 설계 전문가야.** 토론 주제를 추천해줘"

역할을 주면 답변의 관점, 용어 수준, 깊이가 달라집니다.

### ② 맥락 (Context) — "어떤 상황인가"

배경 정보를 알려줍니다. 많을수록 좋습니다.

- 누구를 위한 것인가? (학부 1학년, 30명)
- 어떤 과목·주제인가? (교양 글쓰기, 논증 단원)
- 시간·분량 조건은? (75분 수업, A4 1장)

### ③ 형식 (Format) — "어떤 모양으로"

결과물의 모양을 지정합니다.

- "표로 정리해줘" / "번호 목록으로" / "3문장 이내로"
- "주차/주제/활동 3열 표로" / "학생에게 나눠줄 핸드아웃 형태로"

### ④ 단계 (Steps) — "어떤 순서로"

복잡한 일은 순서를 나눠 요청합니다.

- "(1) 학습목표 3개를 만들고 (2) 각 목표에 맞는 활동을 제안하고 (3) 확인 문항을 만들어줘"

### 완성 예시 — 4요소가 모두 들어간 프롬프트

\`\`\`
[역할] 너는 대학 토론 수업 설계 전문가야.
[맥락] 학부 1학년 교양 수업(75분, 30명)에서 "AI와 일자리"를 다루려고 해.
[형식] 찬반 논제 1개, 찬성/반대 논점 각 3개를 표로 정리해줘.
[단계] 먼저 논제를 제안하고, 내가 고르면 논점을 만들어줘.
\`\`\`

### 자주 쓰는 마법의 추가 문장

| 상황 | 추가 문장 |
|------|----------|
| 결과가 어려울 때 | "중학생도 이해할 수 있게 쉽게 써줘" |
| 결과가 밋밋할 때 | "구체적인 예시를 2개 넣어줘" |
| 결과가 길 때 | "핵심만 5줄로 줄여줘" |
| 다시 시키고 싶을 때 | "○○ 부분만 바꿔서 다시 써줘" |
| 더 잘 시키고 싶을 때 | "더 좋은 결과를 위해 나에게 질문해줘" |

> 💡 **팁: 완벽한 프롬프트를 처음부터 쓰려고 하지 마세요.**
> 일단 요청하고 → 결과를 보고 → "이 부분을 이렇게 바꿔줘"라고 대화로 다듬는 것이 훨씬 빠릅니다.`,
    contentEn: `## The 4 Prompt Elements\n\nRole (who the AI should be), Context (audience, course, constraints), Format (table, list, length), Steps (break complex work into ordered stages). Iterate through conversation rather than perfecting the first prompt.`,
  },
  {
    id: 'vod-templates',
    categoryId: 'vod',
    nameKo: '교수업무 프롬프트 템플릿 모음 (복사해서 바로 사용)',
    nameEn: 'Ready-to-Use Faculty Prompt Templates',
    type: 'template',
    contentKo: `## 바로 쓰는 교수업무 템플릿 10선

아래 템플릿의 **[대괄호] 부분만 바꿔서** Claude에 붙여넣으세요.

### 1. 강의계획서 초안

\`\`\`
너는 대학 교육과정 설계 전문가야. 아래 정보로 15주 강의계획서 초안을 만들어줘.
- 과목명: [과목명]
- 대상: [학년/전공]
- 주당 시간: [예: 3시간]
- 꼭 다룰 내용: [핵심 주제 2~3개]
형식: 주차/주제/핵심내용/활동 4열 표. 중간·기말 주는 비워둬.
\`\`\`

### 2. 주차별 강의안

\`\`\`
[과목명] [주차] 주제 "[주제]"의 75분 강의안을 만들어줘.
구성: 도입(10분)/전개1(25분)/전개2-활동(25분)/정리(15분).
각 단계에 교수자 행동과 학생 행동을 나눠 적어줘.
\`\`\`

### 3. 학습목표 다듬기

\`\`\`
내 학습목표 초안: "[목표 문장]"
이걸 관찰 가능한 행동 동사 문장 3가지 버전으로 바꾸고,
각각 Bloom 분류의 어느 수준인지 표로 알려줘.
\`\`\`

### 4. 확인 퀴즈

\`\`\`
[주제] 범위에서 학부 [학년] 수준 확인 문제를 만들어줘.
객관식 3개(4지선다, 답·해설 포함) + 단답형 2개.
수업을 들었으면 풀 수 있는 기본 난이도로.
\`\`\`

### 5. 채점 루브릭

\`\`\`
[과제명] 채점 루브릭을 만들어줘.
기준: [내용 이해/논리 전개/표현] 3가지 × 수준: 미흡(1)-보통(2)-우수(3).
각 칸은 학생이 읽어도 이해되는 구체적 설명으로.
\`\`\`

### 6. 과제 피드백

\`\`\`
너는 따뜻하지만 정확한 대학 교수야. 아래 과제 요약에 피드백을 써줘.
- 과제: [한 줄 요약] / 메모: [잘된 점·아쉬운 점]
형식: ① 잘한 점 2가지 ② 보완할 점 1가지(방법 포함) ③ 한 줄 격려.
\`\`\`

### 7. 토론 가이드

\`\`\`
[과목명]에서 "[주제]"로 40분 조별 토론을 해.
(1) 찬반 논제 (2) 배경 설명 (3) 찬반 논점 각 3개
(4) 진행 순서·시간표 (5) 마무리 멘트를 만들어줘.
\`\`\`

### 8. 수준별 변환

\`\`\`
아래 내용을 (1) 쉬운 버전(비유, 짧은 문장) (2) 기본 버전
(3) 심화 버전(사례 1개+심화 질문 2개)으로 바꿔줘.
[내용 붙여넣기]
\`\`\`

### 9. 학생 핸드아웃

\`\`\`
아래 강의안으로 A4 1장 핸드아웃을 만들어줘.
구성: 오늘의 목표/핵심 개념 3가지(쉬운 설명)/기억할 문장 1개/자가 점검 질문 2개.
[강의안 붙여넣기]
\`\`\`

### 10. AI 사용 안내문 (강의계획서용)

\`\`\`
[과목명] 강의계획서에 넣을 "생성형 AI 사용 안내"를 써줘.
① 허용 사용 ② 금지 사용 ③ 사용 시 표기법 ④ 위반 시 처리.
학생을 존중하는 말투, 10줄 이내.
\`\`\`

> 💡 **사용 요령:** 결과가 나오면 끝내지 말고 "더 쉽게", "예시 추가", "표로" 등으로 2~3번 다듬으세요. 마음에 든 최종 프롬프트는 메모장에 저장해 나만의 템플릿집을 만드세요.`,
    contentEn: `## 10 Faculty Prompt Templates\n\nCopy-paste templates for syllabus, lesson plan, objectives, quiz, rubric, feedback, debate guide, leveled texts, handout, and AI-use policy. Replace bracketed fields and refine through conversation.`,
  },
  {
    id: 'vod-ethics',
    categoryId: 'vod',
    nameKo: 'AI 윤리·개인정보 — 입력 금지 데이터 기준표',
    nameEn: 'AI Ethics & Data You Must Never Input',
    type: 'reference',
    contentKo: `## AI에 입력하면 안 되는 것들 — 명확한 기준표

AI에 입력한 내용은 **내 손을 떠난 것**입니다. 입력 전에 딱 한 가지만 자문하세요:
**"이 내용이 외부에 공개돼도 괜찮은가?"**

### 🚫 입력 금지 (절대 안 됨)

| 항목 | 이유 | 대안 |
|------|------|------|
| 실제 시험 문항·정답 | 유출 위험 | 유사한 연습 문항으로 재구성해 활용 |
| 학생 이름·학번·연락처 | 개인정보보호법 | "학생 A"로 익명화 |
| 학생 성적·상담 기록 | 민감정보 | 항목만 일반화해 질문 |
| 학내 미공개 문서·회의자료 | 기밀 | 공개된 정보만 활용 |
| 미발표 연구 데이터 | 연구 보안 | 발표 후 or 가공 후 |

### ⚠️ 가공 후 입력 가능

| 항목 | 가공 방법 |
|------|----------|
| 학생 과제(피드백용) | 이름·학번 삭제, 개인 식별 내용 제거 후 |
| 수업 중 실제 사례 | 인물·기관명을 가명으로 바꾼 후 |
| 채점 결과 통계 | 개인 단위가 아닌 집계 수치만 |

### ✅ 자유롭게 입력 가능

- 공개된 교재·강의 주제, 일반 학술 개념
- 내가 작성한 강의안·강의계획서 (기밀 아님)
- 공개 발표된 논문·기사 내용 (요약·해설 요청)

### 저작권·표기 원칙 4가지

1. **AI 생성물을 그대로 내 저작물처럼 쓰지 않기** — 반드시 검토·수정 후 사용
2. **AI 사용 사실 표기하기** — "본 자료 초안 작성에 Claude를 활용함" 등
3. **타인 저작물을 통째로 입력하지 않기** — 저작권 침해 소지
4. **학생에게도 기준 제시하기** — 강의계획서에 AI 사용 허용 범위 명시

### 학생 안내문 예시 (그대로 써도 됩니다)

> 본 과목에서는 아이디어 탐색, 자료 조사, 초안 다듬기에 생성형 AI를 활용할 수 있습니다.
> 다만 과제 전체를 AI로 작성해 제출하는 것은 금지하며,
> AI를 활용한 경우 과제 끝에 "AI 활용 내역"을 한 줄로 표기해야 합니다.
> 표기하지 않고 사용한 것이 확인되면 해당 과제는 0점 처리됩니다.`,
    contentEn: `## AI Ethics & Prohibited Data\n\nNever input: real exam items, student personal data, grades/counseling records, confidential documents, unpublished research. Anonymize before inputting assignments. Always disclose AI use; never paste entire copyrighted works; state your AI policy in the syllabus.`,
  },

  /* ═══════════════════════════════════════
     Day 1
     ═══════════════════════════════════════ */
  {
    id: 'day1-mapping',
    categoryId: 'day1',
    nameKo: '내 과목 AI 적용 지도 그리기 워크시트',
    nameEn: 'AI Mapping Worksheet for My Course',
    type: 'guide',
    contentKo: `## 내 과목 AI 적용 지도 — 어디에 쓰고, 어디에 안 쓸까

### 왜 "지도"가 필요한가요?

AI를 무작정 쓰기 시작하면 두 가지 함정에 빠집니다.
1. **아무 데나 쓰기** — 학생이 직접 생각해야 할 부분까지 AI가 대신함
2. **아무 데도 못 쓰기** — 막연한 불안감에 시작조차 못 함

그래서 첫날 첫 시간에 **"내 과목 지도"**부터 그립니다.

### 1단계: 내 수업 활동을 쪼개기

한 학기 수업을 활동 단위로 나열해 보세요. 인문사회·예체능 수업은 대개 이 셋 중 하나입니다.

| 기둥 | 활동 예시 |
|------|----------|
| 🗣 토론 | 조별 토론, 찬반 논쟁, 세미나 발표 |
| 🔍 사례분석 | 텍스트 강독, 작품 감상, 사례 연구 |
| ✍️ 글쓰기 | 에세이, 감상문, 비평문, 보고서 |

### 2단계: 활동마다 세 칸으로 나누기

각 활동을 세 칸으로 나눠 봅니다.

| 구분 | 토론 수업 예시 |
|------|--------------|
| 🤖 AI가 도울 수 있는 준비 | 논제 만들기, 배경자료 정리, 찬반 논점 초안 |
| 🧑‍🎓 학생이 직접 해야 하는 것 | 자기 입장 정하기, 근거 찾기, 실제 토론 |
| 👩‍🏫 교수자가 판단하는 것 | 논제 최종 선택, 토론 평가, 피드백 확정 |

**원칙은 하나입니다: "AI는 준비를 돕고, 생각은 사람이 한다."**

### 3단계: 우선순위 정하기

지도가 그려지면 "효과는 크고 준비는 쉬운" 것부터 시작합니다.

- 매주 반복되는 준비 작업 (활동지, 발문) → **1순위**
- 학기 1~2회지만 시간이 많이 드는 것 (평가 문항, 루브릭) → **2순위**
- 새로운 시도 (AI 연습 상대, 수업 도구) → **3순위** (Day 3에서!)

### 실습 프롬프트

\`\`\`
너는 인문사회·예체능 교육 설계 전문가야.
내 과목은 [과목명]이고 주요 수업 활동은 [활동 나열]이야.
활동별로 (1) AI가 도울 수 있는 준비 작업
(2) 반드시 학생이 직접 해야 하는 부분
(3) 교수자가 판단해야 하는 부분을 표로 구분해줘.
\`\`\``,
    contentEn: `## AI Mapping Worksheet\n\nBreak your course into debate / case-analysis / writing activities, then split each into: what AI can prepare, what students must do themselves, what the instructor must judge. Principle: AI helps with preparation; thinking stays human. Prioritize high-impact, low-effort applications first.`,
  },
  {
    id: 'day1-objectives',
    categoryId: 'day1',
    nameKo: '학습목표 구조화 가이드 — 행동 동사 사전 포함',
    nameEn: 'Structuring Learning Objectives (with Verb Dictionary)',
    type: 'guide',
    contentKo: `## 학습목표, "확인할 수 있는 문장"으로 바꾸기

### 학습목표란 무엇인가요?

수업이 끝난 뒤 **학생이 무엇을 할 수 있게 되는지** 적은 문장입니다.
목표가 분명하면 강의안도, 평가도, 피드백도 저절로 방향이 잡힙니다.

### 나쁜 목표 vs 좋은 목표

| ❌ 나쁜 목표 | 왜 나쁜가 | ✅ 좋은 목표 |
|------------|----------|------------|
| 시의 아름다움을 이해한다 | "이해"는 눈에 안 보임 | 시에서 인상 깊은 표현을 골라 **이유를 설명할 수 있다** |
| 역사적 사고력을 기른다 | 어떻게 확인? | 사료 두 개를 **비교해 차이의 원인을 추론할 수 있다** |
| 작품을 감상한다 | 뭘 하면 감상? | 작품 감상평을 **두 가지 근거를 들어 쓸 수 있다** |

### 행동 동사 사전 (Bloom 사다리 순서)

쉬운 것부터 어려운 것 순서입니다. 한 주차에 아래에서 1개 + 위에서 1개씩 섞으면 균형이 좋습니다.

| 수준 | 동사 예시 |
|------|----------|
| 1. 기억 | 나열할 수 있다, 말할 수 있다, 고를 수 있다 |
| 2. 이해 | 설명할 수 있다, 요약할 수 있다, 예를 들 수 있다 |
| 3. 적용 | 사용할 수 있다, 적용할 수 있다, 시연할 수 있다 |
| 4. 분석 | 비교할 수 있다, 구분할 수 있다, 관계를 찾을 수 있다 |
| 5. 평가 | 판단할 수 있다, 비평할 수 있다, 반박할 수 있다 |
| 6. 창안 | 만들 수 있다, 설계할 수 있다, 제안할 수 있다 |

### 인문사회·예체능 목표의 특별한 점

정답이 있는 과목과 달리, 우리 계열은 **"사고와 표현의 질"**이 목표입니다.

- 비판적 사고: "주장의 근거를 평가하고 반론을 구성할 수 있다"
- 공감적 해석: "등장인물의 선택을 시대 맥락에서 해석할 수 있다"
- 창의적 표현: "주제를 자신의 매체(글·그림·몸짓)로 재해석할 수 있다"

### 목표 → 강의안 → 평가, 한 줄로 잇기

같은 Claude 대화에서 이 순서로 이어 요청하면 자동으로 정렬됩니다.

1. "학습목표 3개를 만들어줘" → 확정
2. "이 목표로 75분 강의안을 만들어줘"
3. "이 목표 달성을 확인할 평가 문항을 만들어줘"

> 💡 **검산 방법:** 목표의 동사와 평가의 동사가 같은지 보세요.
> 목표가 "비교할 수 있다"인데 시험이 "나열하시오"라면 어긋난 것입니다.`,
    contentEn: `## Structuring Learning Objectives\n\nWrite objectives as observable behaviors ("can explain with two reasons"), not vague states ("understands"). Includes a Bloom verb ladder (remember → create) and humanities-specific competency language. Chain objective → lesson plan → assessment in one Claude conversation for automatic alignment.`,
  },
  {
    id: 'day1-debate',
    categoryId: 'day1',
    nameKo: '토론 가이드·발문·사례 분석지 템플릿',
    nameEn: 'Debate Guide, Questions & Case Sheet Templates',
    type: 'template',
    contentKo: `## 토론 수업 자료 3종 세트 템플릿

### 1. 토론 가이드의 6가지 구성 요소

| 요소 | 내용 | 팁 |
|------|------|-----|
| 논제 | 찬반이 갈리는 한 문장 | "~해야 한다" 형태가 깔끔 |
| 배경 설명 | 2분 분량 안내문 | 중립적으로! |
| 찬반 논점 | 각 3개씩 | 팽팽할수록 좋은 논제 |
| 진행 순서 | 입론→반론→재반론→정리 | 시간 배분 필수 |
| 평가 관점 | 무엇을 보고 평가하나 | 학생에게 미리 공개 |
| 마무리 멘트 | 교수자용 정리 | 승패보다 사고 과정 강조 |

**좋은 논제의 3조건:** ① 찬반이 팽팽하고 ② 교과 개념과 연결되고 ③ 학생 삶과 닿아 있을 것

### 2. 발문(질문)의 3층 구조

질문은 얕은 데서 깊은 데로 쌓아 올립니다.

| 층 | 질문 유형 | 예시 (소설 수업) |
|-----|----------|----------------|
| 1층 | 사실 확인 | "주인공은 왜 고향을 떠났나요?" |
| 2층 | 해석 | "이 선택이 상징하는 것은 무엇일까요?" |
| 3층 | 적용·평가 | "여러분이라면 어떻게 했을까요? 그 이유는?" |

1층 없이 3층부터 물으면 침묵이 흐르고, 1층만 물으면 지루해집니다.

### 3. 템플릿 모음 (복사해서 사용)

**토론 가이드 생성:**
\`\`\`
너는 대학 토론 수업 설계 전문가야.
[과목명]에서 "[주제]"로 40분 조별 토론을 하려고 해.
(1) 찬반형 논제 한 문장 (2) 2분 배경 설명문 (3) 찬성·반대 논점 각 3개
(4) 진행 순서·시간 배분 표 (5) 교수자용 마무리 멘트를 만들어줘.
학부 [학년] 수준으로.
\`\`\`

**3층 발문 세트:**
\`\`\`
[텍스트/작품명] 수업용 발문을 3층으로 만들어줘.
사실 확인 질문 2개 / 해석 질문 2개 / 적용·평가 질문 1개.
각 질문 옆에 예상되는 학생 답변 방향도 한 줄씩.
\`\`\`

**사례 분석지:**
\`\`\`
[사례/작품명]으로 A4 1장 사례 분석지를 만들어줘.
구성: 5줄 요약 / 사실 질문 2개 / 해석 질문 2개 /
적용 질문 1개 / "내 생각 정리" 칸 안내문.
학생에게 바로 나눠줄 수 있는 형태로.
\`\`\`

### 예체능 응용

같은 틀을 그대로 씁니다. "논제" 자리에 해석 쟁점을 넣으면 됩니다.
- 음악: "이 곡의 템포 해석, A연주자와 B연주자 중 누가 작곡 의도에 가까운가"
- 미술: "이 작품을 ○○사조로 분류하는 것이 타당한가"
- 체육: "이 상황에서 전술 A와 B 중 무엇이 옳았나"`,
    contentEn: `## Debate Guide & Question Templates\n\nSix components of a debate guide, three-layer questioning (fact → interpretation → application), and copy-paste templates for debate guides, question sets, and case-analysis sheets. The same frame adapts to arts courses by replacing the motion with an interpretive controversy.`,
  },

  /* ═══════════════════════════════════════
     Day 2
     ═══════════════════════════════════════ */
  {
    id: 'day2-items',
    categoryId: 'day2',
    nameKo: '서술·논술 문항 설계 가이드 — 사고 동사 고르기',
    nameEn: 'Designing Essay Items — Choosing Thinking Verbs',
    type: 'guide',
    contentKo: `## 좋은 서술 문항은 "동사"가 만듭니다

### 서술 문항의 3요소

좋은 서술 문항에는 반드시 세 가지가 들어 있습니다.

\`\`\`
[무엇을]  +  [어떻게(사고 동사)]  +  [조건]
근대화 논쟁을    두 관점에서 비교·분석하시오   (600자 이내, 근거 2개 이상)
\`\`\`

조건이 없으면 채점이 힘들어지고, 동사가 약하면 암기 확인에 그칩니다.

### 사고 동사 고르기 — 무엇을 재고 싶은가?

| 재고 싶은 것 | 동사 | 문항 예시 |
|------------|------|----------|
| 이해했는가 | 요약하라, 설명하라 | "핵심 주장을 3문장으로 요약하시오" |
| 분석하는가 | 비교하라, 구분하라 | "두 사료의 관점 차이를 비교하시오" |
| 평가하는가 | 평가하라, 반박하라 | "이 주장의 약점을 찾아 반박하시오" |
| 창안하는가 | 제안하라, 설계하라 | "대안적 결말을 제안하고 정당화하시오" |

**비판형 문항이란?** "평가하라·반박하라" 계열 동사를 쓴 문항입니다. 인문사회 고등 사고력의 핵심이고, AI 시대에 더 중요해졌습니다(AI가 대신 못 하는 "자기 입장"을 요구하기 때문).

### 단계별 모범답안 — 채점 기준을 눈으로 확인

문항을 만들었으면 **미흡/보통/우수 답안을 미리 만들어 봅니다.**

| 수준 | 특징 (비판형 문항 기준) |
|------|----------------------|
| 우수 | 주장 파악 정확 + 근거 2개 이상으로 반론 + 반론의 한계까지 인식 |
| 보통 | 주장 파악 + 반론 시도하나 근거 1개 or 근거가 약함 |
| 미흡 | 주장 요약에 그침, 자기 입장 없음 |

**모범답안 3종의 쓸모:**
1. 채점 전에 기준이 눈에 보임 → 채점 일관성 ↑
2. 루브릭 검증 도구가 됨 (Day 2 3교시)
3. 학생에게 수준별 예시로 제공 가능

### 실습 프롬프트

\`\`\`
너는 [전공 분야] 평가 전문가야.
[주제] 범위에서 학부 [학년]용 서술형 문항 2개를 만들어줘.
(1) 분석형 1개 + 비판형 1개 (2) 분량·근거 개수 조건 명시
(3) 문항마다 출제 의도 메모 한 줄.
\`\`\`

\`\`\`
1번 문항의 모범답안을 우수/보통/미흡 3수준으로 쓰고,
각 답안이 그 수준인 이유를 채점자 관점에서 2줄씩 설명해줘.
\`\`\`

> ⚠️ **보안 원칙:** 실제 출제할 문항은 AI에 입력하지 않습니다.
> 실습은 유사한 연습 문항으로, 실전 문항은 AI가 만든 초안을 **변형**해서 사용하세요.`,
    contentEn: `## Designing Essay Items\n\nA good item = object + thinking verb + conditions. Choose verbs by what you measure (summarize/compare/critique/propose). Create three-level model answers (excellent/adequate/poor) before grading — they stabilize scoring, validate rubrics, and serve as student examples. Never input real exam items into AI.`,
  },
  {
    id: 'day2-rubric',
    categoryId: 'day2',
    nameKo: '역량 루브릭 작성·검증 가이드',
    nameEn: 'Building & Validating Competency Rubrics',
    type: 'guide',
    contentKo: `## 분석·비판·창의를 재는 루브릭 만들기

### 루브릭이 왜 좋은가요?

루브릭 = "무엇을 얼마나 잘하면 몇 점"인지 적은 **채점 기준표**입니다.

- 채점이 **공정**해집니다 (기분·순서 효과 감소)
- 채점이 **빨라**집니다 (기준표에 대조만 하면 됨)
- 학생 이의 제기에 **근거**가 생깁니다
- 미리 공개하면 그 자체가 **학습 안내**가 됩니다

### 기본 구조

|  | 미흡 (1점) | 보통 (2점) | 우수 (3점) |
|------|----------|----------|----------|
| 분석력 | 내용을 나열함 | 구조를 부분적으로 파악 | 요소 간 관계까지 설명 |
| 비판적 사고 | 자기 입장 없음 | 입장은 있으나 근거 약함 | 근거 2개+ 반론 인식 |
| 창의성 | 기존 논의 반복 | 새 연결 시도 | 독창적 대안 제시·정당화 |
| 표현력 | 문장이 불명확 | 전달되나 구성 느슨 | 논리적 구성+명확한 문장 |

### 수준 서술의 황금률: "행동"으로 쓰기

- ❌ "비판적 사고가 우수함" (동어반복 — 아무 정보 없음)
- ✅ "**근거 2개 이상으로 반론을 구성하고, 자기 반론의 한계도 언급함**"

읽는 사람(학생 포함)이 "아, 이렇게 하면 되는구나"를 알 수 있어야 합니다.

### 루브릭 검증법 — 이게 핵심입니다!

만든 루브릭이 실제로 작동하는지 **모범답안 3종으로 시험 채점**해 봅니다.

1. 우수/보통/미흡 답안을 루브릭으로 각각 채점
2. 총점이 실제로 벌어지는지 확인 (우수 11점 / 보통 7점 / 미흡 4점처럼)
3. 점수 차이가 안 나는 기준이 있다면 → 그 기준의 수준 서술이 모호한 것 → 수정

### 개인화 피드백, 이렇게 확장합니다

30명 피드백을 하나하나 쓰면 지칩니다. **표본 1개 → 템플릿 → 확장** 전략을 쓰세요.

1. 가장 대표적인 과제 1개에 정성 들인 피드백 작성 (직접!)
2. Claude에게 "이 피드백의 구조를 템플릿으로 만들어줘" 요청
3. 학생별로 [빈칸] 메모만 채워 템플릿 적용
4. **마지막 문장은 꼭 직접 쓰기** — 진심은 템플릿이 안 됩니다

### 실습 프롬프트

\`\`\`
너는 교육평가 전문가야. [과제명] 채점 루브릭을 만들어줘.
기준: 분석력/비판적 사고/창의성/표현력 × 4수준(미흡1~탁월4).
각 칸은 학생의 구체적 행동이 보이게 서술해줘.
\`\`\`

\`\`\`
이 루브릭으로 아까 만든 3수준 모범답안을 채점해줘.
기준별 점수와 근거를 표로. 점수 차이가 잘 안 나는 기준이 있으면
그 기준의 수준 서술을 수정해줘.
\`\`\``,
    contentEn: `## Competency Rubrics\n\nRubrics make grading fair, fast, and defensible. Write level descriptors as observable behaviors, not tautologies. Validate by test-grading your three-level model answers — if scores don't separate, the descriptor is ambiguous. Scale feedback via sample → template → per-student memo, but always hand-write the final sentence.`,
  },
  {
    id: 'day2-verify',
    categoryId: 'day2',
    nameKo: '출처 검증·가짜 인용 점검 체크리스트',
    nameEn: 'Source Verification & Fake Citation Checklist',
    type: 'reference',
    contentKo: `## 가짜 인용 잡는 법 — 인문사회 교수자의 필수 기술

### 왜 인문사회에서 특히 중요한가요?

인문사회 글쓰기의 생명은 **인용과 출처**입니다. 그런데 AI는 참고문헌을 **아주 그럴듯하게 지어냅니다.** 실존 학자 이름 + 그럴듯한 제목 + 실존 학술지 조합으로요. 이것을 거르지 못하면 학문적 사고가 무너집니다.

### AI가 만드는 가짜 인용의 특징

- 실존하는 유명 학자의 이름을 씀 (진짜처럼 보임)
- 제목이 주제와 너무 딱 맞음 (수상할 정도로)
- 연도·권호·페이지까지 완벽한 형식 (형식만 완벽)
- 검색하면 **안 나옴** ← 결정적 증거

### 검증 루틴 5단계

1. **모든 인용·참고문헌은 "미확인" 딱지** 붙이고 시작
2. **제목 그대로 검색** — 구글 스칼라, RISS, DBpia
3. **찾았으면 원문 대조** — 저자·연도·내용이 맞는지 (제목만 같은 다른 논문일 수도)
4. **못 찾았으면 삭제** — "아마 있겠지"는 금물
5. **확인된 것만 출처 표기**하고 사용

### Claude 웹 검색으로 1차 검증하기

\`\`\`
웹에서 검색해서 다음 참고문헌들이 실제로 존재하는지 확인해줘:
[참고문헌 목록]
각 문헌에 대해 (1) 실존 여부 (2) 확인 출처 링크
(3) 저자·연도·제목 정확성을 표로 정리하고,
확인 안 되는 문헌은 "삭제 권장"으로 표시해줘.
\`\`\`

⚠️ **주의:** 웹 검색 결과도 최종 확인은 직접! AI 검증을 AI에게만 맡기면 안 됩니다.

### 학생에게도 가르치세요

이 검증 루틴은 그대로 **수업 자료**가 됩니다.

- 과제 조건에 추가: "AI를 활용한 경우, 모든 인용의 원문 확인 여부를 표기할 것"
- 수업 활동으로: AI에게 일부러 참고문헌을 만들게 하고 → 학생이 가짜를 찾아내는 게임
- 평가 기준에 추가: "출처의 실존·정확성" 항목

### 근거 수집용 웹 검색 프롬프트

\`\`\`
웹에서 검색해서 [주제]의 최근 1년 이내 국내 사례·통계를 3개 찾아줘.
각각 (1) 한 줄 요약 (2) 출처 링크 (3) 수업 활용 방법을 정리해줘.
\`\`\``,
    contentEn: `## Fake Citation Checklist\n\nAI fabricates plausible references (real scholars, perfect formatting, unfindable papers). Routine: treat all citations as unverified → search the exact title → compare with the original → delete if unfindable → cite only what's confirmed. Teach the same routine to students as course content.`,
  },

  /* ═══════════════════════════════════════
     Day 3
     ═══════════════════════════════════════ */
  {
    id: 'day3-strategy',
    categoryId: 'day3',
    nameKo: '수업 전·중·후 AI 배치 전략 워크시트',
    nameEn: 'Before/During/After Class AI Strategy Worksheet',
    type: 'guide',
    contentKo: `## 수업 전·중·후, AI를 어디에 배치할까

### 전략의 틀: 3×3 매트릭스

수업을 시간 축으로 셋(전·중·후), 사용 주체로 셋(교수자·학생·금지)으로 나누면 전략이 한 장에 정리됩니다.

| | 수업 전 | 수업 중 | 수업 후 |
|---|--------|--------|--------|
| 👩‍🏫 교수자 사용 | 강의안·활동지·발문 생성 | (준비된 자료 활용) | 피드백 초안, 다음 수업 보완 |
| 🧑‍🎓 학생 사용 허용 | 예습 질문 만들기 | 브레인스토밍(조건부) | 복습 요약, 연습 상대 |
| 🚫 사용 금지 | — | 자기 입장 정하기 | 과제 대필 |

### 수업 유형별 전략 예시

**토론 수업**
- 전: 논제·가이드·발문 생성 (교수자)
- 중: 팀별 "예상 반론 뽑기"에 5분 허용 (학생, 조건부)
- 후: AI를 반론 상대로 1:1 연습 (학생 과제)
- 금지: 토론 중 실시간 답변 검색

**글쓰기 수업**
- 전: 과제 설계, 수준별 예시문 (교수자)
- 중: 개요 브레인스토밍 허용, 문장 생성 금지
- 후: 피드백 초안 (교수자), 고쳐쓰기 비교 연습 (학생)
- 금지: 초고·최종고 AI 작성

**PBL·프로젝트 수업**
- 전: 문제 시나리오 생성, 팀 편성 기준
- 중: 자료 조사 허용 (출처 검증 조건), 중간 점검 질문
- 후: 산출물 자기 점검 체크리스트
- 금지: 최종 산출물 통째로 생성

### 핵심 설계 질문 3가지

전략표를 만들 때 스스로 물어보세요.

1. **이 활동의 교육 목적은?** — 목적을 AI가 대신하면 금지 구역
2. **학생이 AI를 쓰면 배움이 늘어나는가, 줄어드는가?**
3. **허용한다면 조건은?** — 시간 제한, 표기 의무, 검증 의무

### 실습 프롬프트

\`\`\`
너는 대학 수업 혁신 컨설턴트야.
내 과목 [과목명]의 대표 수업 유형은 [토론/글쓰기/발표/PBL]이야.
수업 전-중-후 3단계로 (1) 교수자가 AI를 쓰는 지점
(2) 학생 사용을 허용할 지점과 조건 (3) 금지 지점을 표로 설계해줘.
\`\`\``,
    contentEn: `## Before/During/After AI Strategy\n\nA 3×3 matrix (before/during/after × instructor/student-allowed/prohibited) organizes your AI strategy on one page, with worked examples for debate, writing, and PBL courses. Key questions: what is the activity's purpose, does student AI use increase or decrease learning, and under what conditions?`,
  },
  {
    id: 'day3-vibe',
    categoryId: 'day3',
    nameKo: '바이브코딩 첫걸음 — 수업 도구 만들기 가이드',
    nameEn: 'First Steps in Vibe Coding Class Tools',
    type: 'guide',
    contentKo: `## 바이브코딩 — 코딩 몰라도 됩니다, 정말로

### 바이브코딩이 뭔가요?

**말로 설명하면 AI가 코드를 짜서 완성해 주는 방식**입니다.
"찬반토론 연습판 만들어줘"라고 하면 Claude가 코드를 작성하고, 화면 옆에 **실제로 작동하는 결과물(Artifacts)**로 바로 보여줍니다. 우리는 코드를 한 줄도 읽을 필요가 없습니다.

### 왜 교수자에게 유용한가요?

시중 앱은 내 수업에 딱 맞지 않습니다. 바이브코딩은 **내 수업 활동에 정확히 맞는 도구**를 10분 만에 만들 수 있습니다.

| 수업 활동 | 만들 수 있는 도구 |
|----------|----------------|
| 찬반 토론 | 논제 입력 → 논거·예상 반론 연습판 |
| 역사·문학 수업 | 인물 역할극 인터뷰 도구 |
| 어학·용어 학습 | 어휘 카드 퀴즈 |
| 감상·비평 수업 | 감상평 단계별 훈련 도우미 |
| 발표 수업 | 발표 준비 체크리스트 + 타이머 |

### 잘 만드는 순서: 기획 → 요청 → 다듬기

**1) 기획 (종이에 세 줄)**
- 누가 쓰나? (학생, 조별, 4인)
- 언제 쓰나? (수업 중 15분 활동)
- 무엇을 하나? (논제 입력 → 논거 확인 → 반론 연습)

**2) 요청 (기획을 그대로 문장으로)**
\`\`\`
수업용 웹 도구를 만들어줘. 이름은 "찬반토론 연습판".
기능: (1) 학생이 논제를 입력하면 찬성/반대 입장 선택
(2) 선택한 입장의 핵심 논거 3개와 예상 반론 2개 표시
(3) "반론에 답하기" 연습 칸 제공.
화면은 깔끔하게, 글씨는 크게, 한국어로.
\`\`\`

**3) 다듬기 (대화로 수정)**
- "글씨를 더 크게 해줘"
- "타이머를 추가해줘. 연습 시간 5분"
- "우리 과목에 맞게 예시 논제를 [주제]로 바꿔줘"

### 완성 후 체크리스트

- [ ] 직접 학생 입장에서 한 번 써보기
- [ ] 수업 활동 순서 어디에 넣을지 정하기 (도구는 수단!)
- [ ] 사용법을 화면에 넣거나 1분 안내 준비
- [ ] 잘 안 되는 학생을 위한 대안(종이 버전) 준비

> 💡 **마음가짐:** 첫 결과물이 어설퍼도 괜찮습니다.
> "이 부분 바꿔줘"를 세 번만 하면 몰라보게 좋아집니다.
> 완벽한 도구보다 **수업에 실제로 쓰는 도구**가 이깁니다.`,
    contentEn: `## Vibe Coding Class Tools\n\nDescribe a tool in words and Claude builds a working artifact — no coding required. Plan in three lines (who/when/what), request, then refine through conversation. Includes tool ideas per activity type and a post-build checklist (test as a student, place it in the lesson flow, prepare a paper fallback).`,
  },
  {
    id: 'day3-protocol',
    categoryId: 'day3',
    nameKo: '개인 AI 활용 교수 프로토콜 양식 (최종 산출물)',
    nameEn: 'Personal AI Teaching Protocol Template',
    type: 'template',
    contentKo: `## 나만의 AI 활용 교수 프로토콜 — 연수 최종 산출물

### 프로토콜이란?

3일 연수의 모든 것을 담은 **한 장짜리 나의 원칙 문서**입니다.
학기가 시작되고 바빠지면 배운 것이 흩어집니다. 프로토콜 한 장이 있으면 언제든 돌아올 기준점이 됩니다.

### 프로토콜 6항목 양식

아래 양식을 채우면 완성입니다.

---

**AI 활용 교수 프로토콜** — [이름] / [과목명] / 2026년 2학기

**1. 활용 목적 (한 문장)**
> 예: 반복 준비 작업을 AI에 맡겨 확보한 시간을 학생 개별 지도에 쓴다.

**2. 주 활용 업무 (3가지)**
> 예: ① 주차별 활동지·발문 초안 ② 서술 문항·루브릭 초안 ③ 피드백 템플릿

**3. 나의 금지선 (지키지 못하면 사용 중단)**
> 예: 실제 시험 문항 입력 금지 / 학생 개인정보 입력 금지 / 검증 없이 배포 금지

**4. 학생 허용 기준 (강의계획서에 명시)**
> 예: 브레인스토밍·자료조사 허용(출처 검증 의무), 초고·최종고 작성 금지, 사용 시 표기 의무

**5. 품질 검증 루틴**
> 예: 사실성(이름·숫자·인용 원본 대조) → 타당성(목표·수준 부합) → 편향 점검, 2회 왕복 다듬기

**6. 이번 학기 실행 계획 (작게 시작!)**
> 예: 9월: 3주차 활동지부터 AI 초안 적용 / 10월: 중간 피드백 템플릿 / 12월: 결과 자기 평가

---

### 작성 도우미 프롬프트

\`\`\`
너는 나의 AI 교수법 코치야. 아래 내용으로 "AI 활용 교수 프로토콜" 한 장을 만들어줘.
- 내 과목: [과목명]
- 주로 쓸 업무: [3가지]
- 금지선: [나의 금지선]
- 학생 기준: [허용/금지/표기]
6항목(목적/업무/금지선/학생 기준/검증 루틴/실행 계획)을 표로, A4 1장.
\`\`\`

### 공유 세션 진행 (마지막 30분)

1. 2인 1조로 프로토콜 교환 → 서로 질문 1개씩
2. "가장 크게 바뀐 점 + 이번 학기 시작할 일"을 2분 발표
3. 동료의 프로토콜에서 빌려올 아이디어 1개 메모

> 🎓 **연수를 마치며:** 완벽한 프로토콜보다 **다음 주 월요일에 실행하는 작은 한 가지**가 중요합니다.
> 오늘 만든 산출물 중 하나를 골라, 다음 수업에서 바로 써 보세요.`,
    contentEn: `## Personal AI Teaching Protocol\n\nThe program's final deliverable: a one-page personal document with six items — purpose, top-3 AI tasks, red lines, student policy, quality-check routine, and a semester action plan. Includes a completion prompt and a peer-sharing session format.`,
  },
];
