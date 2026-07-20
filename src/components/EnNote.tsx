import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * 병기 모드에서 한국어 본문 아래에 덧붙이는 영문 보조 표기.
 *
 * 한국어로 진행하는 수업이 정본이고, 영어는 영어권 수강생을 위한 배려로 함께 놓는다.
 * 그래서 영문은 주 본문보다 작고 옅게 — 한국인 수강생의 읽기 흐름을 방해하지 않도록.
 *
 * - 병기 모드가 아니거나 번역이 없으면 아무것도 그리지 않는다.
 * - `lang="en"` 을 붙여 스크린리더가 영어로 읽게 한다.
 */
export default function EnNote({
  text,
  block = false,
}: {
  text?: string | null;
  /** 문단처럼 위아래 여백을 줄지 (기본은 바로 아래 붙는 한 줄) */
  block?: boolean;
}): ReactElement | null {
  const { bilingual } = useLanguage();
  if (!bilingual || !text) return null;
  return (
    <span className={`en-note${block ? ' en-note-block' : ''}`} lang="en">
      {text}
    </span>
  );
}
