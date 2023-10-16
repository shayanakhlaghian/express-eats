import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#44F373', // Spring Green
        'primary-dark': '#0CBC3B',
        'primary-light': '#87F7A5',
      },
    },
  },
  plugins: [],
};
export default config;
