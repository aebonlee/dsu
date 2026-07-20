import { createContext, useContext, useEffect, useState, type ReactElement } from 'react';
import { translations } from '../utils/translations';
import type { Language } from '../types';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = 'dsu-language';

/**
 * 최초 진입 언어 결정.
 * 1) 저장된 선택이 있으면 그것 — 새로고침해도 유지된다.
 *    (저장하지 않던 시절, 외국인 교원이 EN으로 바꿔도 새로고침하면 한국어로 되돌아갔다.)
 * 2) 없으면 브라우저 언어가 한국어가 아닐 때만 영어로 시작.
 */
function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'ko';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'ko' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps): ReactElement => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  // 선택 저장 + <html lang> 동기화(스크린리더·브라우저 번역기가 이 값을 본다)
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState(prev => (prev === 'ko' ? 'en' : 'ko'));

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
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
