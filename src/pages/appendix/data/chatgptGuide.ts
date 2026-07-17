/** 부록 — AI 실전 사용법 (직원·조교 실습용, 핵심 큐레이션) */
export default {
  id: 'ai-practice',
  icon: 'fa-comment-dots',
  title: 'AI 실전 사용법',
  titleEn: 'AI Tools in Practice',
  sections: [
    {
      title: '실전 핵심 요약',
      titleEn: 'Practical Essentials',
      content: `### 1. 기본 원리 — 구체적으로 물을수록 실전 답이 나옵니다
모호하게 물으면 뻔한 답, 구체적으로 물으면 바로 쓸 수 있는 답이 나옵니다.
- ❌ "보고서 잘 써줘"
- ✅ "부서 상반기 실적 보고인데, 핵심 성과 3가지를 각 2줄로 표로 정리해줘"

### 2. 만능 공식 — [역할 + 상황 + 요청 + 형식]
> **[역할] + [상황·맥락] + [무엇을] + [어떤 형식으로]**

- "너는 대학 행정 담당자야. 신입 조교에게 보낼 업무 안내 메일을 정중한 톤으로 400자 이내로 써줘."
- "이 회의록에서 담당자와 기한이 있는 할 일만 뽑아 표로 정리해줘."

### 3. 잘 다듬는 법 — 한 번에 끝내지 말기
초안을 받은 뒤 **"더 간결하게 → 더 정중하게 → 표로 바꿔줘"** 처럼 대화로 다듬는 것이 가장 빠릅니다.

### 4. 피해야 할 패턴
- ❌ "좋은 거 알려줘" ❌ "그냥 만들어줘" → 평범한 답만 나옵니다.

### 5. 어디에 쓰나 (직원·조교)
공문·메일·회의록 정리 · 규정/자료 요약 · 표·체크리스트 만들기 · 어려운 자료의 이해와 학습.`,
      contentEn: `### 1. Be specific for practical answers
Vague input → generic answer; specific input → ready-to-use answer.
- ❌ "Write a good report"
- ✅ "For our H1 performance report, summarize the top 3 results in 2 lines each, as a table"

### 2. The formula — [Role + Situation + Request + Format]
> **[Role] + [Context] + [What] + [In what format]**

- "You're a university admin officer. Write a polite onboarding email for a new TA, under 400 chars."
- "From these minutes, extract only tasks with an owner and due date, as a table."

### 3. Refine, don't one-shot
Get a draft, then **"more concise → more polite → make it a table"** — refining by chat is fastest.

### 4. Avoid
- ❌ "Tell me something good" ❌ "Just make it" → only generic answers.

### 5. Where it helps (staff & TAs)
Documents/emails/minutes, summarizing rules & materials, tables & checklists, understanding difficult material.`,
    },
    {
      title: '자주 쓰는 핵심 키워드',
      titleEn: 'Essential Keywords',
      content: `> **형광펜 표시 = 실제로 잘 통하는 키워드**입니다. 이것만 익혀도 충분해요. 키워드는 AI의 공식 명령이 아니라 '이렇게 요청하는 습관'이라, 안 통하면 예시처럼 **뜻을 풀어서** 쓰면 됩니다. (Claude·ChatGPT 등 모두 동일)

### 이해하기 쉽게
| 키워드 | 시키는 일 | 예시 (그대로 복사해 보세요) |
| --- | --- | --- |
| <mark>ELI5</mark> | 아주 쉽게 설명 · 원어: Explain Like I'm 5(다섯 살에게 설명하듯) | 전자결재가 뭐야? ELI5 |
| <mark>쉽게 풀어줘</mark> | 어려운 문서를 쉬운 말로 | 이 규정 조항 쉽게 풀어줘 |
| <mark>예시 들어줘</mark> | 예로 이해 돕기 | 이 개념, 예시 2개 들어서 설명해줘 |

### 요약·정리
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>TL;DR</mark> | 핵심만 짧게 요약 · 원어: Too Long; Didn't Read(너무 길어 안 읽음 → 요약) | 이 회의록 TL;DR |
| <mark>표로 정리</mark> | 표 형식으로 | 이 3개 업체 견적을 표로 비교해줘 |
| <mark>단계별로</mark> | 순서대로 안내 | 신규 계정 발급 절차를 단계별로 알려줘 |
| <mark>체크리스트</mark> | 실행 목록으로 | 행사 준비를 체크리스트로 만들어줘 |

### 글쓰기·다듬기
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>자연스럽게 다시 써줘</mark> | 어색한 문장 교정 | 이 안내문 더 자연스럽게 다시 써줘 |
| <mark>3가지 버전</mark> | 여러 안 받기 | 이 공지를 정중·간결·친근 3가지 버전으로 써줘 |
| <mark>정중하게 / 친근하게</mark> | 말투 조절 | 이 메일 더 정중한 톤으로 바꿔줘 |

### 분석·판단
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>장단점</mark> | 찬반 정리 | 유연근무 확대의 장단점을 정리해줘 |
| <mark>비교표</mark> | 여러 안 비교 | A안·B안을 비용·기간·리스크 기준으로 비교해줘 |
| <mark>SWOT</mark> | 강점·약점·기회·위협 · 원어: Strengths·Weaknesses·Opportunities·Threats | 우리 부서 업무를 SWOT으로 정리해줘 |

### 확인·학습 (직원·조교)
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>모르면 모른다고</mark> | 지어내기(환각) 줄이기 | 확실하지 않으면 '불확실'이라고 먼저 표시해줘 |
| <mark>스스로 검토해</mark> | 자가 점검 후 개선 | 작성 후 오류나 어색한 부분을 스스로 검토해서 고쳐줘 |
| <mark>퀴즈 만들어줘</mark> | 이해도 점검 | 이 규정으로 퀴즈 5문제 만들어줘 |

> 이 외에 SNS에 도는 키워드(SELFREFINE, X10THINK 등)도 많지만, 대부분 위 핵심과 겹치거나 불안정합니다. **형광펜부터** 익히시면 충분합니다.`,
      contentEn: `> **Highlighted = keywords that reliably work.** These are enough to start. They're not official commands but request habits; if one doesn't work, just spell out the meaning as in the example. (Same on Claude, ChatGPT, and others.)

### Make it easy to understand
| Keyword | What it does | Example (copy & paste) |
| --- | --- | --- |
| <mark>ELI5</mark> | Explain very simply | What is e-approval? ELI5 |
| <mark>put it simply</mark> | Plain-language rewrite | Explain this rule clause in simple terms |
| <mark>give examples</mark> | Aid with examples | Explain this with 2 examples |

### Summarize & organize
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>TL;DR</mark> | Short summary | TL;DR these minutes |
| <mark>as a table</mark> | Table format | Compare these 3 quotes as a table |
| <mark>step by step</mark> | Ordered guide | Explain the account-setup process step by step |
| <mark>checklist</mark> | Actionable list | Make an event-prep checklist |

### Write & polish
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>rewrite naturally</mark> | Fix awkward text | Rewrite this notice more naturally |
| <mark>3 versions</mark> | Get options | Write this notice in polite / concise / friendly versions |
| <mark>more polite / casual</mark> | Adjust tone | Make this email more polite |

### Analyze & decide
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>pros & cons</mark> | Both sides | List pros and cons of flexible work |
| <mark>compare</mark> | Compare options | Compare A vs B by cost, time, risk |
| <mark>SWOT</mark> | Strengths/weaknesses… | SWOT our team's work |

### Check & learn (staff & TAs)
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>say if unsure</mark> | Reduce hallucination | Flag anything you're not sure about |
| <mark>review yourself</mark> | Self-check | After writing, review and fix errors yourself |
| <mark>make a quiz</mark> | Check understanding | Make 5 quiz questions from this rule |

> Many other keywords circulate online (SELFREFINE, X10THINK…), but most overlap with the above or are unreliable. **Start with the highlighted ones.**`,
    },
    {
      title: '설명 수준·대상 정하기',
      titleEn: 'Depth & Audience',
      content: `> "쉽게 설명해줘"는 너무 막연합니다. **누구에게 · 어느 수준으로** 설명할지 콕 집으면 결과가 완전히 달라집니다. (아래 예시 주제 = 2일차 실습의 **AHP** — Analytic Hierarchy Process · 계층분석법)

### 난이도 사다리 — 같은 개념도 6단계로
| 수준 지정 | 어떻게 나오나 | 예시 (그대로 복사) |
| --- | --- | --- |
| <mark>5살에게 (ELI5)</mark> | 비유 중심, 전문용어 0 | AHP를 5살한테 설명하듯 비유로 알려줘 |
| <mark>중학생 수준</mark> | 배경지식 없이 쉬운 말 + 예 1개 | AHP를 중학생도 알 수 있게 전문용어 없이 예시 1개와 |
| <mark>고등학생 수준</mark> | 핵심 개념 + 간단한 절차 | AHP의 개념과 적용 절차를 고등학생 수준으로 |
| <mark>대학 교양 수준</mark> | 정의·맥락·장단점·한계 | 학부 교양 수준으로 정의·쓰임·한계까지 |
| <mark>전공자·실무자 수준</mark> | 정확한 용어·계산 절차·주의점 | 실무자 대상으로 쌍대비교와 일관성비율(CR) 계산까지 정확히 |
| <mark>전문가 수준</mark> | 수식·가정·비판·대안기법 | 전문가 수준으로 고유벡터법 수식, 가정·한계, 대안(ANP)까지 |

### '예시 들어줘'도 콕 집어서
| 막연함 → 구체 | 이렇게 지시하세요 |
| --- | --- |
| 그냥 "예시" → 도메인 맞춤 | 우리 학과 행정 상황에 맞는 사례 2개로 |
| 좋은 예만 → 반례까지 | 잘 된 예 2개 + 흔한 실수(반례) 1개 |
| 추상 → 수치·데이터 | 실제 숫자를 넣은 계산 예시로 |
| 한 개 → 난이도별 | 쉬운 예 1개 + 심화 예 1개 |

> **조합 예시**: "AHP를 **비전공 직원 대상**·**중학생 수준**의 쉬운 말로, **우리 학과 사례 1개**와 함께 **표로** 설명해줘."`,
      contentEn: `> "Explain simply" is too vague. Pin down **who** and **at what level**, and the result changes entirely. (Example topic = **AHP**, used in the Day-2 lab.)

### Difficulty ladder — one concept, six levels
| Level | What you get | Example |
| --- | --- | --- |
| <mark>ELI5 (age 5)</mark> | Analogies, zero jargon | Explain AHP as if to a 5-year-old |
| <mark>middle school</mark> | Plain words + 1 example | Explain AHP for a middle schooler, no jargon, one example |
| <mark>high school</mark> | Core idea + simple steps | AHP's concept and steps at a high-school level |
| <mark>undergrad survey</mark> | Definition, context, limits | Undergrad level: definition, use, limitations |
| <mark>practitioner</mark> | Exact terms, calc steps | For practitioners: pairwise comparison and Consistency Ratio (CR) |
| <mark>expert</mark> | Math, assumptions, alternatives | Expert level: eigenvector method, assumptions, limits, alternatives (ANP) |

### Make "give examples" specific too
| Vague → specific | Tell it like this |
| --- | --- |
| just "examples" → domain-fit | 2 cases from our department's admin work |
| only good → counter-examples | 2 good examples + 1 common mistake |
| abstract → numeric | a worked example with real numbers |
| one → by difficulty | one easy + one advanced example |

> **Combo**: "Explain AHP **for non-major staff** at a **middle-school level**, with **one example from our department**, **as a table**."`,
    },
    {
      title: '톤·스타일 바꾸기',
      titleEn: 'Tone & Style',
      content: `> 같은 내용도 **톤과 형식만 콕 집어** 지정하면 결과가 확 달라집니다. 뭉뚱그리지 말고 골라서 말하세요.

### 말투(톤) — 상황에 맞게
| 이렇게 말하면 | 어울리는 상황 | 예시 (그대로 복사) |
| --- | --- | --- |
| 정중하게 / 격식 있게 | 공문·대외 문서 | 이 안내문을 정중하고 격식 있는 톤으로 다시 써줘 |
| 부드럽게 / 완곡하게 | 부탁·거절 | 거절 내용인데 상대가 상하지 않게 부드럽게 써줘 |
| 단호하게 / 분명하게 | 공지·주의 | 마감 엄수를 단호하고 분명한 어조로 써줘 |
| 친근하게 / 편하게 | 사내·동료 | 신입 조교에게 편하고 친근한 말투로 |
| 따뜻하게 / 공감되게 | 격려·위로 | 고생한 팀원에게 따뜻하게 한마디 써줘 |
| 담백하게 / 객관적으로 | 보고·분석 | 감정 표현 빼고 사실만 담백하게 정리해줘 |

### 형식(스타일) — 원하는 모양으로
| 이렇게 말하면 | 나오는 형식 | 예시 |
| --- | --- | --- |
| <mark>표로</mark> | 비교·정리표 | 3개 안을 항목별로 표로 비교해줘 |
| <mark>개조식으로</mark> | 공문·보고(~함/~임) | 요점만 개조식으로 정리해줘 |
| <mark>번호 단계로</mark> | 절차 안내 | 처리 절차를 1·2·3 단계로 알려줘 |
| <mark>불릿으로</mark> | 목록 | 핵심을 불릿 5개로 정리해줘 |
| <mark>Q&A로</mark> | 안내·FAQ | 예상 문의를 Q&A 형식으로 만들어줘 |
| <mark>세 줄로 / 한 문단으로</mark> | 요약 | 이 보고서를 세 줄로 요약해줘 |`,
      contentEn: `> The same content changes completely once you pin down **tone and format.** Pick, don't leave it vague.

### Tone — match the situation
| Say this | Fits | Example |
| --- | --- | --- |
| polite / formal | official docs | Rewrite this notice in a polite, formal tone |
| soft / indirect | requests, refusals | It's a refusal — keep it soft so they aren't hurt |
| firm / clear | notices, warnings | State the deadline firmly and clearly |
| friendly / casual | internal, peers | Friendly, casual tone for a new TA |
| warm / empathetic | encouragement | A warm note for a hard-working teammate |
| plain / objective | reports | Just the facts, no emotion |

### Format — the shape you want
| Say this | Output | Example |
| --- | --- | --- |
| <mark>as a table</mark> | comparison table | Compare the 3 options in a table |
| <mark>bullet-style (개조식)</mark> | official/report | Summarize key points in 개조식 |
| <mark>numbered steps</mark> | procedures | Give the process as steps 1·2·3 |
| <mark>as bullets</mark> | list | Key points as 5 bullets |
| <mark>as Q&A</mark> | FAQ | Turn likely questions into Q&A |
| <mark>in 3 lines</mark> | summary | Summarize this report in 3 lines |`,
    },
    {
      title: '한국어로 잘 쓰는 법',
      titleEn: 'Writing Well in Korean',
      content: `> AI의 한국어는 그냥 두면 **번역투이거나 존댓말이 들쭉날쭉**합니다. 아래를 콕 집어 지시하면 훨씬 자연스럽고 실무에 바로 쓸 수 있습니다.

| 콕 짚을 것 | 왜 필요한가 | 이렇게 지시하세요 |
| --- | --- | --- |
| 존댓말 수준 | AI가 존댓말·반말을 섞기도 함 | <mark>"하십시오체(격식)로"</mark> · "해요체로 부드럽게" · "반말로" |
| 번역투 제거 | "~에 대하여 / ~를 통하여", 과한 피동("되어집니다")은 어색 | <mark>"번역투 없이 자연스러운 한국어로, 능동형으로"</mark> |
| 공문서 문체 | 공문·보고서는 명사형 종결(~함·~임·~할 것) | <mark>"개조식(~함, ~임)으로 작성해줘"</mark> |
| 글자 수 기준 | 한국어는 '단어'보다 '자(글자)'가 정확 | <mark>"공백 포함 300자 이내로"</mark> |
| 호칭·경어 대상 | 받는 사람에 따라 높임이 달라짐 | "받는 사람은 학과장님, 보내는 사람은 조교로 맞춰줘" |
| 쉬운 말 vs 전문 용어 | 읽는 대상에 맞게 | "한자어·전문용어 대신 쉬운 우리말로" (또는 "공식 용어 그대로") |
| 맞춤법·띄어쓰기 | 마지막 점검 | <mark>"한글 맞춤법과 띄어쓰기 검토해서 고쳐줘"</mark> |
| 직함 표기 | 일관성 | "직함 뒤 '님'을 일관되게 붙여줘" |

> **한 줄 조합 예시**: "이 내용을 격식 있는 **공문체(개조식·하십시오체)**로, **번역투 없이**, **공백 포함 500자 이내**로 정리해줘."`,
      contentEn: `> Left alone, AI's Korean often reads like a translation or mixes honorific levels. Pin down the points below for natural, ready-to-use Korean.

| Pin this down | Why | Tell it like this |
| --- | --- | --- |
| Honorific level | AI mixes formal/informal | <mark>"하십시오체 (formal)"</mark> · "해요체 (soft)" · "반말 (casual)" |
| Kill translationese | "~에 대하여/~를 통하여" & heavy passive sound off | <mark>"자연스러운 한국어로, 능동형으로"</mark> |
| Official style | Docs use noun-ending style (~함/~임) | <mark>"개조식(~함, ~임)으로"</mark> |
| Length by characters | Korean counts 자 (chars), not words | <mark>"공백 포함 300자 이내로"</mark> |
| Who is honored | Honorifics depend on the recipient | "Recipient = dept. head, sender = TA" |
| Plain vs technical | Match the reader | "Plain Korean instead of hanja/jargon" |
| Spelling & spacing | Final check | <mark>"한글 맞춤법·띄어쓰기 검토해서 고쳐줘"</mark> |
| Titles | Consistency | "Add '님' after titles consistently" |

> **One-line combo**: "Rewrite this as a formal official document (개조식·하십시오체), no translationese, within 500 characters incl. spaces."`,
    },
    {
      title: '자주 겪는 문제 (한글 깨짐·문서 기호)',
      titleEn: 'Common Fixes',
      content: `> AI로 파일·문서를 만들 때 자주 걸리는 두 가지와 해결법입니다.

### 1) 한글이 깨질 때 — 인코딩 문제
AI가 만든 CSV·txt를 엑셀에서 열면 한글이 □□□로 깨지는 건 **인코딩 불일치**(UTF-8 ↔ 엑셀 기본) 때문입니다.

| 상황 | 이렇게 하세요 |
| --- | --- |
| 엑셀에서 CSV 한글 깨짐 | "엑셀에서 안 깨지게 <mark>UTF-8 BOM</mark> 포함해서 저장해줘" |
| 그래도 깨지면 | 다운로드 대신 <mark>표를 복사 → 엑셀에 붙여넣기</mark> (탭 구분) |
| 직접 열 때 | 엑셀 '데이터 → 텍스트/CSV 가져오기'에서 인코딩을 <mark>UTF-8</mark>로 지정 |
| 메모장 저장 | 저장 시 인코딩을 <mark>UTF-8</mark>로 선택 |

> 워드·한글(HWP)은 대개 UTF-8을 자동 인식해 잘 안 깨집니다. 문제는 주로 **엑셀 CSV**입니다.

### 2) 제목·항목 앞에 이상한 기호(☐·○·#·-)가 붙을 때
AI가 마크다운을 워드로 옮기면 제목·목록 앞에 **체크박스(☐)·글머리기호(•)·마크다운 잔여 기호(#, -, *, [ ])**가 남곤 합니다. (인쇄용처럼 보이는 네모칸·동그라미도 이 경우입니다.)

| 상황 | 이렇게 하세요 |
| --- | --- |
| 만들기 전에 예방 | "<mark>체크박스·기호 없이</mark> 깔끔한 개요 번호(1. / 1.1)로만 작성해줘" |
| 마크다운 기호가 남음 | "<mark>마크다운 기호(#, -, *, [ ]) 없이</mark> 워드용 서식으로 정리해줘" |
| 이미 문서에 생김 | AI에게: "각 제목·항목 앞의 ☐·○·기호를 전부 제거해줘" |
| 워드에서 직접 | <mark>찾기·바꾸기(Ctrl+H)</mark>로 해당 기호를 빈칸으로 일괄 치환 |
| 개요 번호 정렬 | 워드 '다단계 목록'으로 번호를 다시 지정 |

> **한 줄 요청 예시**: "이 내용을 워드에 바로 붙일 수 있게, **마크다운 기호와 체크박스 없이**, 제목은 '1. / 1.1' 개요 번호로만 정리해줘."`,
      contentEn: `> Two common snags when generating files/docs with AI, and how to fix them.

### 1) Broken Korean — encoding
Korean shows as □□□ when an AI-made CSV/txt opens in Excel — an **encoding mismatch** (UTF-8 vs Excel's default).

| Situation | Do this |
| --- | --- |
| Korean breaks in Excel CSV | "Save with <mark>UTF-8 BOM</mark> so Excel doesn't break it" |
| Still broken | <mark>Copy the table → paste into Excel</mark> (tab-separated) instead of downloading |
| Opening directly | Excel 'Data → From Text/CSV', set encoding to <mark>UTF-8</mark> |
| Notepad save | Choose <mark>UTF-8</mark> when saving |

> Word/HWP usually auto-detect UTF-8. The problem is mostly **Excel CSV**.

### 2) Odd marks (☐·○·#·-) before headings
Converting markdown to Word can leave **checkboxes (☐), bullets (•), or leftover markdown (#, -, *, [ ])** before titles/lists.

| Situation | Do this |
| --- | --- |
| Prevent it | "Write with <mark>no checkboxes or symbols</mark>, clean outline numbers only (1. / 1.1)" |
| Markdown leftover | "<mark>No markdown symbols (#, -, *, [ ])</mark>, format for Word" |
| Already in the doc | Ask: "Remove all ☐·○·symbols before every heading/item" |
| In Word directly | <mark>Find & Replace (Ctrl+H)</mark> to clear the symbols |
| Fix numbering | Reset with Word's 'Multilevel List' |

> **One-line request**: "Format this to paste straight into Word — **no markdown symbols or checkboxes**, headings as '1. / 1.1' outline numbers only."`,
    },
  ],
};
