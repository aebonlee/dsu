/**
 * 영문 오버레이 진입점 — 세션·실습 상세의 영문본을 한 곳에 모은다.
 * 한국어 정본: src/data/courses.ts · src/data/handsOn.ts
 * 키 규칙과 배경은 ./types.ts 참고.
 */

import { VOD_EN } from './vod-en';
import { DAY1_EN } from './day1-en';
import { DAY2_EN } from './day2-en';
import { DAY3_EN } from './day3-en';
import { HANDSON_EN } from './handson-en';
import type { LabEn, SessionEn } from './types';

const SESSIONS_EN = { ...VOD_EN, ...DAY1_EN, ...DAY2_EN, ...DAY3_EN };

export const sessionKey = (programId: string, day: number, index: number) => `${programId}:${day}:${index}`;

/**
 * 영문 세션 본문. 언어가 한국어이거나 번역이 없으면 null —
 * 호출부는 `en?.title ?? session.title` 로 한국어 원문에 자연히 되돌아간다.
 */
export function getSessionEn(
  language: string,
  programId: string,
  day: number,
  index: number,
): SessionEn | null {
  if (language !== 'en') return null;
  return SESSIONS_EN[sessionKey(programId, day, index)] ?? null;
}

/** 영문 실습 랩. 규칙은 getSessionEn 과 동일. */
export function getLabEn(language: string, labId: string): LabEn | null {
  if (language !== 'en') return null;
  return HANDSON_EN[labId] ?? null;
}

export type { LabEn, SessionEn } from './types';
