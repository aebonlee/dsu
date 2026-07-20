import GuidePage from '../../components/GuidePage';
import { useLanguage } from '../../contexts/LanguageContext';
import glossary from './data/glossary';
import tips from './data/tips';
import resources from './data/resources';
import aiPractice from './data/chatgptGuide';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

interface Section { title: string; titleEn: string; content: string; contentEn: string }
interface DataFile { id: string; icon: string; title: string; titleEn: string; sections: Section[] }

/**
 * 병기 모드용 본문 합치기.
 *
 * GuidePage 는 한 언어의 마크다운만 그린다. 그래서 병기 모드에서는
 * 한국어 본문(정본) 뒤에 영문 본문을 `.en-note-block` 로 감싸 이어 붙여 넘긴다.
 * 앞뒤 빈 줄이 있어야 remark 가 div 안쪽을 마크다운으로 계속 파싱한다
 * (GuidePage 가 rehype-raw 를 쓰므로 원시 HTML 이 그대로 살아난다).
 */
function withEnglish(file: DataFile, bilingual: boolean): DataFile {
  if (!bilingual) return file;
  return {
    ...file,
    sections: file.sections.map(sec =>
      sec.contentEn
        ? { ...sec, content: `${sec.content}\n\n<div class="en-note-block" lang="en">\n\n${sec.contentEn}\n\n</div>\n` }
        : sec,
    ),
  };
}

export default function Appendix(): ReactElement {
  const { language, bilingual } = useLanguage();
  const isKo = language === 'ko';

  const files = [glossary, tips, aiPractice, resources].map(f => withEnglish(f as DataFile, bilingual));

  return (
    <GuidePage
      seoTitle="부록"
      seoTitleEn="Appendix"
      seoDescription={isKo
        ? '용어 해설, 실전 팁, AI 실전 사용법 — 교육과 더불어 공부할 부록 자료'
        : 'Glossary, practical tips, and hands-on AI guides — supporting material to study alongside the training'}
      path="/appendix"
      dataFiles={files}
    />
  );
}
