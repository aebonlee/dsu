import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '소개' : 'About'}
        path="/about"
      />

      <section className="page-header">
        <div className="container">
          <h1>{language === 'ko' ? '동신대학교 교수자 AI 역량 강화 연수' : 'Dongshin Faculty AI Competency'}</h1>
          <p>{language === 'ko'
            ? 'Claude 중심 생성형 AI 교수 활용 — 공통 VOD 8시간 + 인문사회·예체능 트랙 대면 12시간 (2026.07.20~22)'
            : 'Claude-centered generative AI for teaching — 8h common VOD + 12h in-person track (Jul 20–22, 2026)'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2><i className="fa-solid fa-bullseye" /> {language === 'ko' ? '연수 목표' : 'Goals'}</h2>
              <ul>
                <li>{language === 'ko' ? '생성형 AI(Claude)의 원리와 한계를 이해하고 검증 습관 갖추기' : 'Understand how Claude works, its limits, and build verification habits'}</li>
                <li>{language === 'ko' ? '프롬프트 4요소(역할·맥락·형식·단계)로 교수 업무에 바로 적용' : 'Apply the 4 prompt elements directly to teaching tasks'}</li>
                <li>{language === 'ko' ? '내 과목의 학습목표·강의안·평가 문항·루브릭 산출물 완성' : 'Produce real objectives, lesson plans, assessment items and rubrics'}</li>
                <li>{language === 'ko' ? '바이브코딩으로 수업 도구를 만들고 개인 AI 교수 프로토콜 수립' : 'Build class tools via vibe coding and a personal AI teaching protocol'}</li>
              </ul>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-layer-group" /> {language === 'ko' ? '과정 구성' : 'Program Structure'}</h2>
              <div className="about-targets">
                <div className="target-item">
                  <i className="fa-solid fa-circle-play" />
                  <h4>{language === 'ko' ? '공통 VOD (8H)' : 'Common VOD (8h)'}</h4>
                  <p>{language === 'ko' ? 'LLM 원리 · 프롬프트 엔지니어링 · 학습자료 제작 · 평가와 AI 윤리 (사전 영상학습)' : 'LLM basics, prompting, materials, assessment & ethics (pre-recorded)'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-comments" />
                  <h4>{language === 'ko' ? 'Day 1~2 (8H)' : 'Days 1–2 (8h)'}</h4>
                  <p>{language === 'ko' ? '수업 목표 구조화 · 토론 가이드 · 서술형·비판형 평가 설계 · 루브릭·피드백' : 'Structuring goals, debate guides, essay assessment design, rubrics & feedback'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-wand-magic-sparkles" />
                  <h4>{language === 'ko' ? 'Day 3 (4H)' : 'Day 3 (4h)'}</h4>
                  <p>{language === 'ko' ? 'AI 활용 수업 전략 · 바이브코딩 수업 도구 제작 · 개인 교수 프로토콜 완성' : 'AI class strategy, vibe-coding tools, personal teaching protocol'}</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-wand-magic-sparkles" /> {language === 'ko' ? 'AI 도구' : 'AI Tools'}</h2>
              <p>{language === 'ko'
                ? '5가지 AI 교수학습 도구를 활용하여 교수학습 업무를 혁신합니다.'
                : 'Innovate teaching tasks with 5 AI teaching tools.'}</p>
              <div className="about-tools">
                <span className="about-tool-tag"><i className="fa-solid fa-calendar-days" /> {language === 'ko' ? '강의계획서 생성기' : 'Syllabus Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-table-cells" /> {language === 'ko' ? '루브릭 생성기' : 'Rubric Builder'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-file-pen" /> {language === 'ko' ? '과제 생성기' : 'Assignment Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-comments" /> {language === 'ko' ? '피드백 생성기' : 'Feedback Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-check-double" /> {language === 'ko' ? '학생 과제 평가' : 'Student Evaluator'}</span>
              </div>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-user-tie" /> {language === 'ko' ? '강사 정보' : 'Instructor'}</h2>
              <div className="instructor-info">
                <h4>{language === 'ko' ? '정동엽 교수' : 'Prof. Dongyeop Jung'}</h4>
                <p>{language === 'ko' ? '인문사회·예체능 트랙 (Day 1~3 대면 실습)' : 'Humanities & Arts Track (Days 1–3, in-person)'}</p>
                <ul>
                  <li>{language === 'ko' ? '생성형 AI 교수법·바이브코딩 실습 중심 강의' : 'Hands-on generative AI pedagogy & vibe coding'}</li>
                  <li>{language === 'ko' ? '공통 VOD(8H)는 별도 강사 녹화 영상으로 사전 학습' : 'Common VOD (8h) is pre-recorded by a separate instructor'}</li>
                </ul>
                <div className="instructor-contact">
                  <p><i className="fa-solid fa-envelope" /> aebon@dreamitbiz.com</p>
                  <p><i className="fa-solid fa-globe" /> www.dreamitbiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
