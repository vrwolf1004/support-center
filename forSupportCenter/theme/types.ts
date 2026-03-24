export interface ThemeTokens {
  colors: {
    primary: string;
    accent: string;
    bg: string;
    surface: string;
    text: string;
    textOnPrimary: string;
    textOnAccent: string;
    border: string;
  };
  radius: { sm: string; md: string };
  font: string;
  shadow: string;
  borderWidth: string;
  backdropFilter: string;
}

export interface Theme {
  key: string;
  name: string;
  icon: string;
  tokens: ThemeTokens;
}

export const CSS_VARS = {
  primary: '--crema-primary',
  accent: '--crema-accent',
  bg: '--crema-bg',
  surface: '--crema-surface',
  text: '--crema-text',
  textOnPrimary: '--crema-text-on-primary',
  textOnAccent: '--crema-text-on-accent',
  border: '--crema-border',
  radiusSm: '--crema-radius-sm',
  radiusMd: '--crema-radius-md',
  font: '--crema-font',
  shadow: '--crema-shadow',
  borderWidth: '--crema-border-width',
  backdropFilter: '--crema-backdrop-filter',
} as const;

export function themeToCssVars(theme: Theme): Record<string, string> {
  return {
    '--crema-primary': theme.tokens.colors.primary,
    '--crema-accent': theme.tokens.colors.accent,
    '--crema-bg': theme.tokens.colors.bg,
    '--crema-surface': theme.tokens.colors.surface,
    '--crema-text': theme.tokens.colors.text,
    '--crema-text-on-primary': theme.tokens.colors.textOnPrimary,
    '--crema-text-on-accent': theme.tokens.colors.textOnAccent,
    '--crema-border': theme.tokens.colors.border,
    '--crema-radius-sm': theme.tokens.radius.sm,
    '--crema-radius-md': theme.tokens.radius.md,
    '--crema-font': theme.tokens.font,
    '--crema-shadow': theme.tokens.shadow,
    '--crema-border-width': theme.tokens.borderWidth,
    '--crema-backdrop-filter': theme.tokens.backdropFilter,
  };
}
