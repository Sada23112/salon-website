import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-secondary': 'rgb(var(--accent-secondary) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'dark-bg': 'rgb(var(--dark-bg) / <alpha-value>)',
        'light-bg': 'rgb(var(--light-bg) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

