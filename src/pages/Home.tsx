import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { COURSE_CATEGORIES } from '../data/courses';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  useAOS();

  const isKo = language === 'ko';
  const marqueeWords = (isKo
    ? 'Claude · 프롬프트 · 학습목표 구조화 · 토론 가이드 · 평가 루브릭 · 바이브코딩 · AI 윤리 · 교수 프로토콜'
    : 'Claude · Prompts · Objectives · Debate Guides · Rubrics · Vibe Coding · AI Ethics · Teaching Protocol'
  ).split(' · ');

  // 연수 특징 (Overview band)
  const features = [
    { no: '01', icon: 'fa-circle-play', title: isKo ? 'VOD 사전학습' : 'VOD First', desc: isKo ? '공통 VOD 4모듈(8시간)로 LLM 원리·프롬프트·학습자료·평가와 윤리를 미리 다집니다.' : 'Four common VOD modules (8h) cover LLM basics, prompting, materials, and ethics first.' },
    { no: '02', icon: 'fa-hands-holding-circle', title: isKo ? '대면 실습 중심' : 'Hands-on Days', desc: isKo ? 'Day1~3(각 4시간)은 이론이 아니라 내 과목의 실제 산출물을 만드는 실습으로 진행합니다.' : 'Days 1–3 (4h each) are pure hands-on sessions producing real deliverables for your course.' },
    { no: '03', icon: 'fa-palette', title: isKo ? '인문사회·예체능 특화' : 'Humanities & Arts', desc: isKo ? '토론·글쓰기·사례분석·실기 등 계열 특성에 맞춘 AI 적용 전략과 템플릿을 제공합니다.' : 'AI strategies and templates tailored to debate, writing, case analysis, and performance.' },
    { no: '04', icon: 'fa-box-open', title: isKo ? '산출물 중심' : 'Deliverable-first', desc: isKo ? '학습목표·강의안·토론 가이드·평가 문항·루브릭·수업 도구까지 바로 쓰는 산출물을 만듭니다.' : 'Objectives, lesson plans, debate guides, assessments, rubrics, and class tools — ready to use.' },
  ];

  // 수강 안내 (How it works)
  const prep = [
    { no: '1', title: isKo ? '공통 VOD 수강' : 'Watch the VOD', desc: isKo ? '대면 연수 전에 공통 VOD 4모듈(8시간)을 먼저 시청하고 Claude 계정을 만들어 두세요.' : 'Watch the four common VOD modules (8h) and create a Claude account beforehand.' },
    { no: '2', title: isKo ? 'Claude 준비' : 'Set up Claude', desc: isKo ? 'claude.ai에 가입하고 첫 프롬프트를 입력해 보세요. 노트북을 지참하면 실습이 편합니다.' : 'Sign up at claude.ai and try your first prompt. Bring a laptop for the sessions.' },
    { no: '3', title: isKo ? 'Day1~3 대면 실습' : 'Days 1–3', desc: isKo ? '7/20~22 사흘간 매일 4시간, 내 과목 자료를 가지고 와서 실제 산출물을 만들어 갑니다.' : 'Jul 20–22, 4 hours daily — bring your course materials and leave with real deliverables.' },
    { no: '4', title: isKo ? '프로토콜 완성' : 'Finish protocol', desc: isKo ? '마지막 날 개인 AI 활용 교수 프로토콜을 완성해 동료와 공유하며 마무리합니다.' : 'Complete and share your personal AI teaching protocol on the final day.' },
  ];

  // 연수 안내 (Info cards)
  const infoCards = [
    { kicker: 'Format', rows: [
      { k: isKo ? '운영 형태' : 'Format', v: isKo ? '공통 VOD(8H) + 대면 실습(12H)' : 'VOD (8h) + in-person (12h)' },
      { k: isKo ? '일정' : 'Schedule', v: isKo ? '2026.07.20(월)~22(수) · 매일 4H' : 'Jul 20–22, 2026 · 4h daily' },
      { k: isKo ? '트랙' : 'Track', v: isKo ? '인문사회·예체능 (정동엽 교수)' : 'Humanities & Arts' },
    ] },
    { kicker: 'Who', rows: [
      { k: isKo ? '대상' : 'Audience', v: isKo ? '동신대 교원·강사 (인문사회·예체능)' : 'Dongshin faculty (H&A)' },
      { k: isKo ? '난이도' : 'Level', v: isKo ? '입문부터 — 사전 지식 불필요' : 'Beginner-friendly' },
      { k: isKo ? '실습 환경' : 'Practice', v: isKo ? 'Claude (claude.ai) + 노트북 지참' : 'Claude + laptop' },
    ] },
    { kicker: 'Completion', rows: [
      { k: isKo ? '이수 기준' : 'Criteria', v: isKo ? 'VOD 수강 + Day1~3 실습 산출물' : 'VOD + deliverables' },
      { k: isKo ? '최종 산출물' : 'Final output', v: isKo ? '개인 AI 활용 교수 프로토콜' : 'Personal AI protocol' },
      { k: isKo ? '문의' : 'Contact', v: 'aebon@dreamitbiz.com' },
    ] },
  ];

  return (
    <>
      <SEOHead title={t('site.home.title')} />

      {/* Hero — Editorial */}
      <section className="hero-ed">
        <div className="hero-ed-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-ed-grid">
            <div className="hero-ed-main">
              <div className="hero-ed-eyebrow" data-aos="fade-up">
                <span>{isKo ? '동신대학교 · 2026.07.20~22 · 정동엽 교수' : 'Dongshin University · Jul 20–22, 2026'}</span>
              </div>
              <h1 className="hero-ed-title" data-aos="fade-up" data-aos-delay="50">
                {isKo ? '가르치는 교수자를 위한' : 'For Faculty Who Teach'}<br />
                <span className="accent">{isKo ? 'Claude 생성형 AI' : 'Claude Generative AI'}</span><br />
                <span className="accent">{isKo ? '교수 활용 12시간' : '12-Hour Training'}</span>
              </h1>
              <p className="hero-ed-lead" data-aos="fade-up" data-aos-delay="100">
                {isKo
                  ? '공통 VOD로 기초를 다지고, 인문사회·예체능 트랙 Day1~3 대면 실습에서 내 과목의 학습목표·강의안·평가 문항·루브릭·수업 도구를 직접 완성하는 실습 중심 연수입니다. 컴퓨터가 서툴러도 괜찮습니다 — 아주 기초부터 차근차근 진행합니다.'
                  : 'Build foundations with the common VOD, then complete your own objectives, lesson plans, assessments, rubrics, and class tools in hands-on Days 1–3. Beginner-friendly — we start from the very basics.'}
              </p>
              <div className="hero-ed-actions" data-aos="fade-up" data-aos-delay="150">
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/courses')}>
                  <i className="fa-solid fa-graduation-cap" /> {isKo ? '연수과정 보기' : 'View Courses'}
                </button>
                <button className="btn btn-accent btn-lg" onClick={() => navigate('/prompt-eval')}>
                  <i className="fa-solid fa-clipboard-check" /> {isKo ? '프롬프트 실습·평가' : 'Prompt Lab'}
                </button>
              </div>
            </div>

            <aside className="hero-ed-side" data-aos="fade-left" data-aos-delay="100">
              <div className="hero-ed-metrics">
                <div className="hero-metric">
                  <div className="hero-metric-num accent">4</div>
                  <div className="hero-metric-label">{isKo ? '연수과정' : 'Courses'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">29</div>
                  <div className="hero-metric-label">{isKo ? '전체 차시' : 'Sessions'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">20<span className="small">H</span></div>
                  <div className="hero-metric-label">{isKo ? '총 연수 시간' : 'Total Hours'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num accent">3<span className="small">일</span></div>
                  <div className="hero-metric-label">{isKo ? '대면 실습' : 'In-person Days'}</div>
                </div>
              </div>
              <div className="hero-ed-card">
                <div className="hero-ed-card-eyebrow">2026 · Dongshin Faculty AI</div>
                <div className="hero-ed-card-title">{isKo ? '공통 VOD + Day 1~3' : 'Common VOD + Days 1–3'}</div>
                <ul className="hero-ed-card-list">
                  {COURSE_CATEGORIES.map((p) => (
                    <li key={p.id}>
                      <span className="hero-card-name">{isKo ? p.nameKo : p.nameEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="marquee-group">
              {marqueeWords.map((w, j) => (
                <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.coursesTitle')}</h2>
            <p>{t('site.home.coursesDesc')}</p>
          </div>
          <div className="course-category-grid">
            {COURSE_CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="course-category-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onClick={() => navigate(`/courses/${cat.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-icon" style={{ background: cat.color }}>
                  <i className={`fa-solid ${cat.icon}`} />
                </div>
                <span className="category-duration"><i className="fa-regular fa-clock" /> {cat.duration}</span>
                <h3>{language === 'ko' ? cat.nameKo : cat.nameEn}</h3>
                <p className="category-tagline">{cat.tagline}</p>
                <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                <div className="category-tags">
                  {cat.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="category-tag">{h}</span>
                  ))}
                </div>
                <span className="category-link">
                  {language === 'ko' ? '커리큘럼 보기' : 'View Curriculum'} <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview band — 교육 특징 */}
      <section className="overview-band">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-intro" data-aos="fade-up">
              <div className="overview-eyebrow">Overview</div>
              <h2>{isKo ? '인문사회·예체능\n교수자를 위한 AI 연수' : 'AI training for\nhumanities & arts faculty'}</h2>
              <p>{isKo
                ? '토론·글쓰기·사례분석·실기 수업의 특성에 맞춰, 내 수업에 곧바로 적용할 수 있는 산출물 중심으로 설계했습니다.'
                : 'Built around debate, writing, case analysis, and performance — producing deliverables you can apply to your own teaching right away.'}</p>
            </div>
            <div className="overview-cards">
              {features.map((f, i) => (
                <div key={f.no} className="overview-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="overview-card-top">
                    <span className="overview-no">{f.no}</span>
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 교육 전 준비사항 */}
      <section className="section">
        <div className="container">
          <div className="prep-wrap" data-aos="fade-up">
            <div className="prep-head">
              <div className="overview-eyebrow accent-eyebrow">How It Works</div>
              <h2>{isKo ? '수강 방법' : 'How It Works'}</h2>
              <p>{isKo
                ? '공통 VOD로 기초를 다진 뒤, 사흘간의 대면 실습에서 내 과목의 산출물을 완성합니다.'
                : 'Build foundations with the VOD, then complete your own deliverables across three hands-on days.'}</p>
            </div>
            <div className="prep-grid">
              {prep.map((p) => (
                <div key={p.no} className="prep-item">
                  <span className="prep-no">{p.no}</span>
                  <div>
                    <div className="prep-title">{p.title}</div>
                    <div className="prep-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 교육 안내 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="overview-eyebrow">Information</div>
            <h2>{isKo ? '연수 안내' : 'Program Information'}</h2>
            <p>{isKo ? '운영 방식·수강 대상·이수 기준을 한눈에 확인하세요.' : 'Format, audience, and completion criteria at a glance.'}</p>
          </div>
          <div className="info-grid">
            {infoCards.map((c, i) => (
              <div key={c.kicker} className="info-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="info-kicker">{c.kicker}</div>
                {c.rows.map((r) => (
                  <div key={r.k} className="info-row">
                    <div className="info-k">{r.k}</div>
                    <div className="info-v">{r.v}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="info-cta" data-aos="fade-up">
            <button className="btn btn-accent btn-lg" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-graduation-cap" /> {isKo ? '과정 살펴보기' : 'Explore programs'}
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
