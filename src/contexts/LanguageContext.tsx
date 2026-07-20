import { createContext, useContext, useEffect, useState, type ReactElement } from 'react';
import { translations } from '../utils/translations';
import type { Language } from '../types';

/**
 * 표시 모드 3종.
 *  ko    — 한국어만
 *  en    — 영어만
 *  both  — 한국어 아래에 영어를 함께 (영어권 수강생을 위한 배려)
 *
 * `language` 는 계속 'ko' | 'en' 뿐이다. 화면 곳곳의
 * `language === 'ko' ? 한국어 : English` 분기를 그대로 살리기 위해서다.
 * 병기 모드는 language='ko' + bilingual=true 로 표현한다 —
 * 주 언어는 한국어이고 영어는 보조로 덧붙는다는 뜻.
 */
export type DisplayMode = 'ko' | 'en' | 'both';

interface LanguageContextValue {
  language: Language;
  /** 병기 모드 여부. 본문 아래 영문 보조 표기를 낼지 판단할 때 쓴다. */
  bilingual: boolean;
  mode: DisplayMode;
  setMode: (mode: DisplayMode) => void;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = 'dsu-language';

/**
 * 최초 진입 표시 모드 결정.
 * 1) 저장된 선택이 있으면 그것 — 새로고침해도 유지된다.
 *    (저장하지 않던 시절, 외국인 교원이 EN으로 바꿔도 새로고침하면 한국어로 되돌아갔다.)
 * 2) 없으면 브라우저 언어가 한국어가 아닐 때만 영어로 시작.
 */
function initialMode(): DisplayMode {
  if (typeof window === 'undefined') return 'ko';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'ko' || saved === 'en' || saved === 'both') return saved;
  return navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps): ReactElement => {
  const [mode, setModeState] = useState<DisplayMode>(initialMode);

  const language: Language = mode === 'en' ? 'en' : 'ko';
  const bilingual = mode === 'both';

  // 선택 저장 + <html lang> 동기화(스크린리더·브라우저 번역기가 이 값을 본다)
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('lang', language);
  }, [mode, language]);

  const setMode = (next: DisplayMode) => setModeState(next);
  const setLanguage = (lang: Language) => setModeState(lang);
  const toggleLanguage = () => setModeState(prev => (prev === 'en' ? 'ko' : 'en'));

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, bilingual, mode, setMode, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
