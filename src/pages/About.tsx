import GuidePage from '../components/GuidePage';
import about from '../data/about';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <GuidePage
      seoTitle="About"
      seoTitleEn="About"
      seoDescription="동신대학교 교수자 AI 역량 강화 연수 — 개발 취지와 강사(정동엽) 소개"
      path="/about"
      dataFiles={[about]}
    />
  );
}
