# 단일 테마 추출 샘플 — Nouveau

## 추출 순서

**1단계. 파일 복사** (2개만 필요)

```
platform-CremaMini/src/packages/tokens/src/themes/types.ts       →  theme/types.ts
platform-CremaMini/src/packages/tokens/src/themes/artnouveau.ts   →  theme/artnouveau.ts
```

**2단계. CSS 변수 생성**

```ts
import { artNouveauTheme } from './theme/artnouveau';
import { themeToCssVars } from './theme/types';

const cssVars = themeToCssVars(artNouveauTheme);
// { '--crema-primary': '#2D6A4F', '--crema-accent': '#52b788', '--crema-bg': '#fdf6e3', ... }
```

**3단계. 최상위 div에 적용**

```tsx
<div style={{ ...cssVars, backgroundColor: 'var(--crema-bg)' }}>
  {/* 이 안에서 var(--crema-*) 사용 가능 */}
</div>
```

**4단계. 컴포넌트에서 변수 사용**

```tsx
<button style={{
  backgroundColor: 'var(--crema-primary)',
  color: 'var(--crema-text-on-primary)',
  borderRadius: 'var(--crema-radius-sm)',
  fontFamily: 'var(--crema-font)',
  boxShadow: 'var(--crema-shadow)',
}}>
  버튼
</button>
```

---

## 파일 구조

```
forSupportCenter/
  theme/
    types.ts        ← ThemeTokens 타입 + themeToCssVars 함수
    artnouveau.ts   ← Nouveau 테마 토큰 값
  App.tsx           ← 사용 예시
  index.html        ← 브라우저에서 바로 열 수 있는 데모
  README.md
```

## Nouveau 테마 특성

| 속성 | 값 | 설명 |
|------|-----|------|
| Primary | #2D6A4F | 깊은 그린 |
| Accent | #52b788 | 밝은 그린 |
| Background | #fdf6e3 | 따뜻한 크림 |
| Surface | #f5ebe0 | 베이지 |
| Text | #2c1810 | 다크 브라운 |
| Border | #8b6914 | 골드 |
| Border Radius | 20px / 24px | 부드러운 라운드 |
| Font | Palatino, serif | 세리프 서체 |
| Shadow | 0 4px 12px | 자연스러운 그림자 |
| Border Width | 1px | 얇은 테두리 |

---

## 다른 테마로 바꾸려면

`artnouveau.ts` 대신 원하는 테마 파일로 교체:

| 테마 | 파일 |
|------|------|
| ☀️ Light | `light.ts` |
| 🌙 Dark | `dark.ts` |
| ◼ Modernism | `modernism.ts` |
| ▓ Brutalism | `brutalism.ts` |
| ◈ Glass | `glass.ts` |
| ⬡ Neumorphism | `neumorphism.ts` |
