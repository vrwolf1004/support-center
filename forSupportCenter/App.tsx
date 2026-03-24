import React from 'react';
import { artNouveauTheme } from './theme/artnouveau';
import { themeToCssVars } from './theme/types';

// CSS 변수를 root에 적용
const cssVars = themeToCssVars(artNouveauTheme);

export const App = () => {
  return (
    <div style={{ ...cssVars, backgroundColor: 'var(--crema-bg)', minHeight: '100vh', padding: 24 } as React.CSSProperties}>

      {/* 카드 */}
      <div style={{
        backgroundColor: 'var(--crema-surface)',
        border: 'var(--crema-border-width) solid var(--crema-border)',
        borderRadius: 'var(--crema-radius-md)',
        padding: 20,
        boxShadow: 'var(--crema-shadow)',
        maxWidth: 400,
      }}>
        <h2 style={{ color: 'var(--crema-primary)', marginTop: 0 }}>Nouveau 테마 적용 예시</h2>
        <p style={{ color: 'var(--crema-text)' }}>
          2개 파일만 복사해서 사용하는 단일 테마 샘플입니다.
        </p>

        {/* 버튼 */}
        <button style={{
          appearance: 'none',
          backgroundColor: 'var(--crema-primary)',
          color: 'var(--crema-text-on-primary)',
          border: 'none',
          borderRadius: 'var(--crema-radius-sm)',
          padding: '8px 16px',
          cursor: 'pointer',
          fontFamily: 'var(--crema-font)',
          fontSize: 14,
          fontWeight: 'bold',
          marginRight: 8,
          boxShadow: 'var(--crema-shadow)',
        } as React.CSSProperties}>
          Primary 버튼
        </button>

        <button style={{
          appearance: 'none',
          backgroundColor: 'transparent',
          color: 'var(--crema-primary)',
          border: 'var(--crema-border-width) solid var(--crema-primary)',
          borderRadius: 'var(--crema-radius-sm)',
          padding: '8px 16px',
          cursor: 'pointer',
          fontFamily: 'var(--crema-font)',
          fontSize: 14,
          boxShadow: 'var(--crema-shadow)',
        } as React.CSSProperties}>
          Outline 버튼
        </button>
      </div>

    </div>
  );
};
