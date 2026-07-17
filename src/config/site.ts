/**
 * ============================================================
 *  동신대학교 교수자 AI 역량 강화 연수 — 사이트 설정
 *  2026.07.20(월)~22(수) · 정동엽 교수 · 대면 12시간 + 공통 VOD 8시간
 *  구성: 공통 VOD 4모듈(사전 영상학습) + 인문사회·예체능 트랙 Day1~3
 * ============================================================
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'dsu',
  name: 'Dongshin Faculty AI',
  nameKo: '동신대학교 교수자 AI 역량 강화 연수',
  description: '동신대학교 교수자 AI 역량 강화 연수 — Claude 중심 생성형 AI 교수 활용. 공통 VOD 4모듈(LLM 원리·프롬프트·학습자료·평가와 윤리) + 인문사회·예체능 트랙 Day1~3(수업 목표 구조화·평가 문항 설계·AI 활용 교수 프로토콜)',
  url: 'https://dsu.dreamitbiz.com',
  dbPrefix: 'dsu_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: '동신대', className: 'brand-dream' },
      { text: ' 교수자', className: 'brand-it' },
      { text: ' AI', className: 'brand-biz' }
    ]
  },

  themeColor: '#0054A6',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // 기본 컬러셋 = 동신청색(#0054A6, 공식 시그니처 PNG 실측)
  // 테마 키 이름은 CSS(html[data-color=…]) 하위호환을 위해 mju 세트를 유지
  colors: [
    { name: 'mju', color: '#0054A6' },       // 동신청색 (기본)
    { name: 'academic', color: '#C8A04A' },  // 네이비+골드
    { name: 'research', color: '#009B77' },  // 동신녹색 계열
    { name: 'vibe', color: '#8E2F6F' },      // 동신자색 계열
  ],

  // 공통 VOD + Day1~3 + 프롬프트 학습·평가
  menuItems: [
    { path: '/courses/vod', activePath: '/courses/vod', labelKey: 'site.nav.progVod' },
    { path: '/courses/day1', activePath: '/courses/day1', labelKey: 'site.nav.progDay1' },
    { path: '/courses/day2', activePath: '/courses/day2', labelKey: 'site.nav.progDay2' },
    { path: '/courses/day3', activePath: '/courses/day3', labelKey: 'site.nav.progDay3' },
    { path: '/prompt-eval', activePath: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/recommended', labelKey: 'site.nav.recommended' },
  ],

  footerLinks: [
    { path: '/courses', labelKey: 'nav.education' },
    { path: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/community', labelKey: 'nav.community' },
    { path: '/about', labelKey: 'nav.about' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '대학교육 AI', url: 'https://university.dreamitbiz.com' },
    { name: '교수학습 AI 도구', url: 'https://teaching.dreamitbiz.com' },
    { name: 'AI 프롬프트 가이드', url: 'https://ai-prompt.dreamitbiz.com' },
  ]
};

export default site;

/** AI 도구 정의 */
export interface AITool {
  id: string;
  path: string;
  icon: string;
  nameKo: string;
  nameEn: string;
  descKo: string;
  descEn: string;
}

export const AI_TOOLS: AITool[] = [
  {
    id: 'syllabus',
    path: '/tools/syllabus',
    icon: 'fa-calendar-days',
    nameKo: '강의계획서 생성기',
    nameEn: 'Syllabus Generator',
    descKo: 'AI를 활용하여 체계적인 강의계획서를 자동 생성합니다.',
    descEn: 'Generate structured syllabi automatically using AI.',
  },
  {
    id: 'rubric',
    path: '/tools/rubric',
    icon: 'fa-table-cells',
    nameKo: '루브릭 생성기',
    nameEn: 'Rubric Builder',
    descKo: '평가 기준표를 체계적으로 설계하고 생성합니다.',
    descEn: 'Design and generate structured assessment rubrics.',
  },
  {
    id: 'assignment',
    path: '/tools/assignment',
    icon: 'fa-file-pen',
    nameKo: '과제 생성기',
    nameEn: 'Assignment Generator',
    descKo: '난이도와 유형에 맞는 과제를 자동 생성합니다.',
    descEn: 'Auto-generate assignments by difficulty and type.',
  },
  {
    id: 'feedback',
    path: '/tools/feedback',
    icon: 'fa-comments',
    nameKo: '피드백 생성기',
    nameEn: 'Feedback Generator',
    descKo: '학생에게 개인화된 피드백을 자동 생성합니다.',
    descEn: 'Generate personalized feedback for students.',
  },
  {
    id: 'evaluator',
    path: '/tools/evaluator',
    icon: 'fa-check-double',
    nameKo: '학생 과제 평가',
    nameEn: 'Student Evaluator',
    descKo: '루브릭 기반으로 학생 과제를 AI가 평가합니다.',
    descEn: 'AI evaluates student work based on rubrics.',
  },
];
