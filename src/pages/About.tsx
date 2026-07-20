import GuidePage from '../components/GuidePage';
import { useLanguage } from '../contexts/LanguageContext';
import about from '../data/about';
import type { ReactElement } from 'react';

interface Section { title: string; titleEn: string; content: string; contentEn: string }
interface DataFile { id: string; icon: string; title: string; titleEn: string; sections: Section[] }

/**
 * 병기 모드용 본문 합치기.
 *
 * GuidePage 는 한 언어의 마크다운만 그린다. 그래서 병기 모드에서는
 * 한국어 본문(정본) 뒤에 영문 본문을 `.en-note-block` 로 감싸 이어 붙여 넘긴다.
 * 앞뒤로 빈 줄을 두어야 remark 가 div 안쪽을 마크다운으로 계속 파싱한다
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

export default function About(): ReactElement {
  const { language, bilingual } = useLanguage();
  const isKo = language === 'ko';

  return (
    <GuidePage
      seoTitle="About"
      seoTitleEn="About"
      seoDescription={isKo
        ? '동신대학교 교수자 AI 역량 강화 연수 — 개발 취지와 강사(정동엽) 소개'
        : 'Dongshin University Faculty AI Competency Training — why this site exists and who teaches it'}
      path="/about"
      dataFiles={[withEnglish(about as DataFile, bilingual)]}
    />
  );
}
