import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getProgramById, PROGRAMS } from '../../data/courses';
import { MATERIALS } from '../../data/materials';
import { getHandsOn } from '../../data/handsOn';
import PromptBlock from '../../components/PromptBlock';
import { renderInline } from '../../utils/inlineMd';
import type { ReactElement } from 'react';

export default function CourseCategory(): ReactElement {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [matOpen, setMatOpen] = useState(true);
  const [selectedMatId, setSelectedMatId] = useState<string | null>(null);
  const [showLab, setShowLab] = useState(false);

  const program = getProgramById(category || '');

  if (!program) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2>{language === 'ko' ? '과정을 찾을 수 없습니다.' : 'Program not found.'}</h2>
        <button className="btn btn-primary" onClick={() => navigate('/courses')}>
          {language === 'ko' ? '교육과정으로 돌아가기' : 'Back to Courses'}
        </button>
      </div>
    );
  }

  const totalSessions = program.curriculum.reduce((s, d) => s + d.sessions.length, 0);
  const materials = MATERIALS.filter((m) => m.categoryId === program.id);
  const labs = getHandsOn(program.id);
  const selectedMat = selectedMatId ? materials.find((m) => m.id === selectedMatId) : null;
  const openMaterial = (id: string) => { setSelectedMatId(id); setShowLab(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const openLab = () => { setShowLab(true); setSelectedMatId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const showCurriculum = () => { setSelectedMatId(null); setShowLab(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <SEOHead
        title={language === 'ko' ? program.nameKo : program.nameEn}
        path={`/courses/${category}`}
      />

      {/* Program header */}
      <section className="program-hero" style={{ borderBottom: `3px solid ${program.color}` }}>
        <div className="container">
          <div className="program-hero-inner two-col">
            {/* 좌: 아이콘 + 타이틀 */}
            <div className="program-hero-main">
              <div className="program-hero-icon" style={{ background: program.color }}>
                <i className={`fa-solid ${program.icon}`} />
              </div>
              <div className="program-hero-text">
                <div className="eyebrow">Program {String(program.order).padStart(2, '0')} · {program.duration}</div>
                <h1>{language === 'ko' ? program.nameKo : program.nameEn}</h1>
                <p className="program-hero-tagline">{program.tagline}</p>
                <div className="program-hero-meta">
                  <span><i className="fa-solid fa-user-check" /> {program.audience}</span>
                  <span><i className="fa-solid fa-layer-group" /> {totalSessions}{language === 'ko' ? '개 실습 교시' : ' sessions'}</span>
                  <span><i className="fa-solid fa-signal" /> {program.level}</span>
                </div>
              </div>
            </div>

            {/* 우: 설명 + 버튼 + 안내 */}
            <div className="program-hero-side">
              <p className="program-hero-desc">{language === 'ko' ? program.descKo : program.descEn}</p>
              {program.padletUrl && (
                <a
                  href={program.padletUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent program-hero-padlet"
                  style={{ background: program.color, borderColor: program.color }}
                >
                  <i className="fa-solid fa-chalkboard-user" />
                  {program.padletLabel || 'Padlet'}
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 12 }} />
                </a>
              )}
              <div
                className="program-platform-note compact"
                style={{ borderLeftColor: program.color, background: `${program.color}14` }}
              >
                <i className="fa-solid fa-shield-halved" style={{ color: program.color }} />
                <span>{language === 'ko'
                  ? '모든 실습은 예시 프롬프트를 복사해 직접 따라 할 수 있습니다.'
                  : 'Every practice includes a ready-to-use prompt you can copy.'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum with left sidebar */}
      <section className="section">
        <div className="container course-layout">
          {/* ── 왼쪽 과정 메뉴 ── */}
          <aside className="course-sidebar">
            <div className="course-sidebar-inner">
              <div className="course-sidebar-title" style={{ borderColor: program.color }}>
                <i className={`fa-solid ${program.icon}`} style={{ color: program.color }} />
                <span>{language === 'ko' ? program.nameKo : program.nameEn}</span>
              </div>

              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '과정 메뉴' : 'Course Menu'}</span>
                <button
                  type="button"
                  className={`course-sidebar-link${!selectedMat && !showLab ? ' active' : ''}`}
                  onClick={showCurriculum}
                >
                  <i className="fa-solid fa-list-check" /> {language === 'ko' ? '커리큘럼' : 'Curriculum'}
                </button>

                {labs.length > 0 && (
                  <button
                    type="button"
                    className={`course-sidebar-link${showLab ? ' active' : ''}`}
                    onClick={openLab}
                  >
                    <i className="fa-solid fa-laptop-code" /> {language === 'ko' ? '실습 · 따라하기' : 'Hands-on Labs'}
                  </button>
                )}

                {/* 학습자료 — 드롭다운으로 해당 과목 자료 연결(같은 페이지 내 표시) */}
                <button
                  type="button"
                  className={`course-sidebar-link course-sidebar-toggle${matOpen ? ' open' : ''}`}
                  onClick={() => setMatOpen(!matOpen)}
                  aria-expanded={matOpen}
                >
                  <i className="fa-solid fa-folder-open" /> {language === 'ko' ? '학습자료' : 'Materials'}
                  <i className="fa-solid fa-chevron-down course-sidebar-chevron" />
                </button>
                {matOpen && (
                  <div className="course-sidebar-sublist">
                    {materials.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        className={`course-sidebar-link sub${selectedMatId === m.id ? ' active' : ''}`}
                        onClick={() => openMaterial(m.id)}
                      >
                        <i className="fa-regular fa-file-lines" /> {language === 'ko' ? m.nameKo : m.nameEn}
                      </button>
                    ))}
                    <Link to={`/materials/${program.id}`} className="course-sidebar-link sub more">
                      <i className="fa-solid fa-arrow-right" /> {language === 'ko' ? '학습자료 전체보기' : 'View all materials'}
                    </Link>
                  </div>
                )}

                <Link to={`/community/${program.id}`} className="course-sidebar-link">
                  <i className="fa-solid fa-comments" /> {language === 'ko' ? '게시판' : 'Board'}
                </Link>
              </nav>

              {!selectedMat && !showLab && (
              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '커리큘럼 바로가기' : 'Jump to'}</span>
                {program.curriculum.map((day) => (
                  <a key={day.day} href={`#day-${day.day}`} className="course-sidebar-link sub">
                    <i className="fa-regular fa-calendar" /> {day.badge} — {day.theme.split(' — ')[0]}
                  </a>
                ))}
              </nav>
              )}

              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '다른 과정' : 'Other Programs'}</span>
                {PROGRAMS.filter((p) => p.id !== program.id).map((p) => (
                  <Link key={p.id} to={`/courses/${p.id}`} className="course-sidebar-link sub">
                    <i className={`fa-solid ${p.icon}`} /> {language === 'ko' ? p.nameKo : p.nameEn}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── 오른쪽 본문: 따라하기 / 학습자료 / 커리큘럼 ── */}
          <div className="course-content">
          {showLab ? (
            <div className="handson">
              <button type="button" className="material-inline-back" onClick={showCurriculum}>
                <i className="fa-solid fa-arrow-left" /> {language === 'ko' ? '커리큘럼으로' : 'Back to curriculum'}
              </button>
              <div className="handson-head">
                <div className="material-inline-eyebrow" style={{ color: program.color }}>
                  <i className="fa-solid fa-laptop-code" /> {language === 'ko' ? program.nameKo : program.nameEn} · {language === 'ko' ? '실습 따라하기' : 'Hands-on'}
                </div>
                <h2 className="material-inline-title">{language === 'ko' ? '실습 · 따라하기' : 'Hands-on Labs'}</h2>
                <p className="handson-intro">{language === 'ko'
                  ? '생성형 AI를 켜고 아래 랩을 순서대로 따라 해보세요. 각 단계의 예시 프롬프트를 그대로 입력하면 됩니다.'
                  : 'Open multi-LLM and follow each lab. Paste the example prompts as-is.'}</p>
              </div>

              {labs.map((lab) => (
                <article key={lab.id} className="lab-card">
                  <div className="lab-card-head" style={{ borderColor: program.color }}>
                    <h3 className="lab-title">{lab.title}</h3>
                    <div className="lab-meta">
                      <span><i className="fa-solid fa-signal" /> {lab.level}</span>
                      <span><i className="fa-regular fa-clock" /> {lab.minutes}</span>
                    </div>
                    <p className="lab-scenario">{renderInline(lab.scenario)}</p>
                  </div>
                  <ol className="lab-steps">
                    {lab.steps.map((s, si) => (
                      <li key={si} className="lab-step">
                        <span className="lab-step-num" style={{ background: program.color }}>{si + 1}</span>
                        <div className="lab-step-body">
                          <div className="lab-step-title">{s.title}</div>
                          <p className="lab-step-detail">{renderInline(s.detail)}</p>
                          {s.prompt && <PromptBlock prompt={s.prompt} />}
                          {s.check && <div className="lab-step-check"><i className="fa-solid fa-circle-check" /> {renderInline(s.check)}</div>}
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="lab-result"><i className="fa-solid fa-flag-checkered" /> {lab.result}</div>
                </article>
              ))}
            </div>
          ) : selectedMat ? (
            <article className="material-inline">
              <button type="button" className="material-inline-back" onClick={showCurriculum}>
                <i className="fa-solid fa-arrow-left" /> {language === 'ko' ? '커리큘럼으로' : 'Back to curriculum'}
              </button>
              <div className="material-inline-eyebrow" style={{ color: program.color }}>
                <i className="fa-solid fa-folder-open" /> {language === 'ko' ? program.nameKo : program.nameEn} · {language === 'ko' ? '학습자료' : 'Materials'}
              </div>
              <h2 className="material-inline-title">{language === 'ko' ? selectedMat.nameKo : selectedMat.nameEn}</h2>
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {language === 'ko' ? selectedMat.contentKo : selectedMat.contentEn}
                </ReactMarkdown>
              </div>
            </article>
          ) : (
          <>
          {program.curriculum.map((day) => (
            <div key={day.day} id={`day-${day.day}`} className="curriculum-day">
              <div className="curriculum-day-head">
                <span className="curriculum-day-badge" style={{ background: program.color }}>{day.badge}</span>
                <div>
                  <h2 className="curriculum-day-title">{day.theme}</h2>
                  <span className="curriculum-day-sub">{day.sessions.length}{language === 'ko' ? '차시 · 마이크로러닝' : ' sessions · microlearning'}</span>
                </div>
              </div>

              <div className="curriculum-sessions">
                {day.sessions.map((session, si) => (
                  <div key={si} className="session-card">
                    <div className="session-time">
                      <span className="session-period" style={{ color: program.color }}>{session.period}</span>
                      <span className="session-clock">{session.time}</span>
                    </div>
                    <div className="session-body">
                      <div className="session-title-row">
                        <h3 className="session-title">{session.title}</h3>
                        <span className="session-badges">
                          {session.difficulty && (
                            <span className={`session-diff diff-${session.difficulty}`}>{session.difficulty}</span>
                          )}
                          {session.importance && (
                            <span className="session-imp" title={`중요도 ${session.importance}/3`}>
                              {'★'.repeat(session.importance)}{'☆'.repeat(3 - session.importance)}
                            </span>
                          )}
                        </span>
                      </div>
                      <p className="session-goal"><i className="fa-solid fa-bullseye" /> {renderInline(session.goal)}</p>

                      <div className="session-topics">
                        {session.topics.map((topic) => (
                          <span key={topic} className={`session-topic${topic.startsWith('📦') ? ' output' : ''}`}>{renderInline(topic)}</span>
                        ))}
                      </div>

                      <div className="session-practices">
                        <div className="session-practices-head">
                          <i className="fa-solid fa-laptop-code" /> {language === 'ko' ? '실습 사례' : 'Practice'}
                        </div>
                        {session.practices.map((pc, pi) => (
                          <div key={pi} className="practice-item">
                            <div className="practice-scenario">
                              <span className="practice-num" style={{ background: program.color }}>{pi + 1}</span>
                              {pc.scenario}
                            </div>
                            <PromptBlock prompt={pc.prompt} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="program-cta">
            <button className="btn btn-accent btn-lg" onClick={() => navigate('/login')}>
              <i className="fa-solid fa-right-to-bracket" /> {language === 'ko' ? '로그인하고 학습 시작' : 'Log in to start'}
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-arrow-left" /> {language === 'ko' ? '전체 과정 보기' : 'All Programs'}
            </button>
          </div>
          </>
          )}
          </div>
        </div>
      </section>
    </>
  );
}
