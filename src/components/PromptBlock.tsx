import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

/** 실습 프롬프트 상자 — 학습자료 코드블록과 동일한 디자인(헤더 바 + 복사 버튼) */
export default function PromptBlock({ prompt }: { prompt: string }): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper prompt-plain">
      <div className="code-block-header">
        <span className="code-block-lang">{isKo ? '프롬프트' : 'Prompt'}</span>
        <button
          type="button"
          className={`code-copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label={isKo ? '프롬프트 복사' : 'Copy prompt'}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
          {copied ? (isKo ? '복사됨!' : 'Copied!') : (isKo ? '복사' : 'Copy')}
        </button>
      </div>
      <div className="code-block-content">
        <pre><code>{prompt}</code></pre>
      </div>
    </div>
  );
}
