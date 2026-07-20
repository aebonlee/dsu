import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GuidePage from '../../components/GuidePage';
import EnNote from '../../components/EnNote';
import PromptEvalNav from '../../components/PromptEvalNav';
import promptBasics from './data/prompt-basics';
import promptEvaluation from './data/prompt-evaluation';
import promptTechniques from './data/prompt-techniques';
import promptExamples from './data/prompt-examples';
import '../../styles/practice.css';

export default function PromptEvalHub() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <GuidePage
        seoTitle="프롬프트 실습"
        seoTitleEn="Prompt Lab"
        seoDescription={isKo
          ? '프롬프트 작성 기법, 평가 기준, 실전 예시 및 실습 가이드'
          : 'Prompt writing techniques, evaluation criteria, worked examples, and a hands-on practice guide'}
        path="/prompt-eval"
        dataFiles={[promptBasics, promptEvaluation, promptTechniques, promptExamples]}
        sidebarHeader={<PromptEvalNav />}
        sidebarFooter={
          <>
            <Link to="/prompt-eval/workshop" className="guide-sidebar-cta workshop">
              <i className="fa-solid fa-wand-magic-sparkles" />
              <div>
                <strong>{isKo ? '프롬프트 작성 평가' : 'Writing Evaluation'}</strong>
                <span>{isKo ? '자동 채점 & 수정 재평가' : 'Auto-score & re-evaluate'}</span>
              </div>
            </Link>
            <Link to="/prompt-eval/practice" className="guide-sidebar-cta practice">
              <i className="fa-solid fa-clipboard-check" />
              <div>
                <strong>{isKo ? '종합 실습 테스트' : 'Full Practice Test'}</strong>
                <span>{isKo ? '퀴즈 + 평가 + 작성 (250점)' : 'Quiz + Eval + Write (250pts)'}</span>
              </div>
            </Link>
          </>
        }
        ctaBanner={
          <>
            <div className="prompt-practice-cta">
              <div className="prompt-practice-cta-text">
                <h3>{isKo ? '프롬프트 작성 평가' : 'Prompt Writing Evaluation'}</h3>
                <p>
                  {isKo ? '프롬프트를 직접 작성하고 SCORE 기준으로 자동 채점! 수정하며 점수 변화를 확인하세요.' : 'Write your own prompt and have it scored automatically against the SCORE criteria. Revise it and watch your score change.'}
                  <EnNote block text="Write your own prompt and have it scored automatically against the SCORE criteria. Revise it and watch your score change." />
                </p>
              </div>
              <Link to="/prompt-eval/workshop" className="prompt-practice-cta-btn">
                <i className="fa-solid fa-wand-magic-sparkles" />
                {isKo ? '작성 평가 시작' : 'Start Workshop'}
              </Link>
            </div>
            <div className="prompt-practice-cta" style={{ background: 'rgba(56,161,105,0.12)', borderColor: 'rgba(56,161,105,0.32)' }}>
              <div className="prompt-practice-cta-text">
                <h3>{isKo ? '종합 실습 테스트' : 'Full Practice Test'}</h3>
                <p>
                  {isKo ? '선택형 퀴즈 + 프롬프트 평가 + 직접 작성까지, 250점 만점 종합 실습을 진행하세요.' : 'A full 250-point practice session: multiple-choice quiz, prompt evaluation, and writing your own prompts.'}
                  <EnNote block text="A full 250-point practice session: multiple-choice quiz, prompt evaluation, and writing your own prompts." />
                </p>
              </div>
              <Link to="/prompt-eval/practice" className="prompt-practice-cta-btn" style={{ background: '#2f855a' }}>
                <i className="fa-solid fa-clipboard-check" />
                {isKo ? '종합 실습 시작' : 'Start Practice'}
              </Link>
            </div>
          </>
        }
      />
    </>
  );
}
