import type { ReactNode } from 'react';

/**
 * 데이터 문자열 안의 간단한 인라인 마크업을 실제 서식으로 렌더링
 *  - **굵게**  → <strong>
 *  - ==형광펜== → <mark>
 * (일반 텍스트로 렌더되는 topics·goal·detail 등에 사용.
 *  마크다운 전체 파서가 필요한 곳은 ReactMarkdown을 그대로 사용)
 */
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*(.+?)\*\*|==(.+?)==)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[2] !== undefined) {
      parts.push(<strong key={key++}>{m[2]}</strong>);
    } else if (m[3] !== undefined) {
      parts.push(<mark key={key++} className="hl-pen">{m[3]}</mark>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
