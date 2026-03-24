import type { Theme } from './types';

export const artNouveauTheme: Theme = {
  key: 'artnouveau',
  name: 'Nouveau',
  icon: '✿',
  tokens: {
    colors: {
      primary: '#2D6A4F',
      accent: '#52b788',
      bg: '#fdf6e3',
      surface: '#f5ebe0',
      text: '#2c1810',
      textOnPrimary: '#ffffff',
      textOnAccent: '#ffffff',
      border: '#8b6914',
    },
    radius: { sm: '20px', md: '24px' },
    font: "Palatino,'Book Antiqua',Georgia,serif",
    shadow: '0 4px 12px rgba(44,24,16,0.15)',
    borderWidth: '1px',
    backdropFilter: 'none',
  },
};
