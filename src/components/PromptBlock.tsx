import { useState } from 'react';
import type { ReactElement } from 'react';

/** 실습 프롬프트 상자 — 우상단 복사 버튼 포함 */
export default function PromptBlock({ prompt }: { prompt: string }): ReactElement {
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
    <div className="prompt-block">
      <button
        type="button"
        className={`prompt-copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label="프롬프트 복사"
      >
        <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
        {copied ? '복사됨!' : '복사'}
      </button>
      <pre className="practice-prompt"><code>{prompt}</code></pre>
    </div>
  );
}
