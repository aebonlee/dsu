import GuidePage from '../../components/GuidePage';
import glossary from './data/glossary';
import tips from './data/tips';
import resources from './data/resources';
import aiPractice from './data/chatgptGuide';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

export default function Appendix(): ReactElement {
  return (
    <GuidePage
      seoTitle="부록"
      seoTitleEn="Appendix"
      seoDescription="용어 해설, 실전 팁, AI 실전 사용법 — 교육과 더불어 공부할 부록 자료"
      path="/appendix"
      dataFiles={[glossary, tips, aiPractice, resources]}
    />
  );
}
