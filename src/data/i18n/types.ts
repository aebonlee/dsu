/**
 * ============================================================
 *  영문 오버레이 — 커리큘럼 세션·실습 상세
 * ============================================================
 *  한국어가 정본(src/data/courses.ts · handsOn.ts)이고, 영문은 별도 오버레이로 얹는다.
 *
 *  왜 인라인 `~En` 필드가 아니라 오버레이인가
 *   - courses.ts 는 이미 98KB다. 세션마다 영문 필드를 끼우면 한국어 원본을 읽고 고치기 어려워진다.
 *   - 강의 콘텐츠는 한국어 기준으로 수시로 손보는데, 영문이 사이에 끼면 수정 지점을 놓친다.
 *
 *  키 규칙: `<programId>:<curriculumDay>:<sessionIndex>`  (예: 'day1:1:0')
 *  키가 없으면 화면은 한국어 원문을 그대로 보여준다 — 번역 누락이 빈 화면이 되지 않게.
 * ============================================================
 */

export interface PracticeEn {
  scenario: string;
  /** [Role]·[Context]·[Request]·[Format]·[Example]·[Condition] 라벨 구조 유지 */
  prompt: string;
}

export interface SessionEn {
  title: string;
  goal: string;
  topics: string[];
  practices: PracticeEn[];
}

export type SessionEnMap = Record<string, SessionEn>;

export interface LabStepEn {
  title: string;
  detail: string;
  prompt?: string;
  check?: string;
}

export interface LabEn {
  title: string;
  scenario: string;
  level: string;
  minutes: string;
  steps: LabStepEn[];
  result: string;
}

/** 키: handsOn 랩의 id */
export type LabEnMap = Record<string, LabEn>;
