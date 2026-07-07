import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0fa',
          100: '#c5d8f4',
          200: '#8ab4e8',
          500: '#2d5a8e',
          600: '#1e3a5f',
          700: '#0a1628',
          900: '#060d1a',
          DEFAULT: '#1e3a5f',
          dark: '#0a1628',
          light: '#2d5a8e',
        },
        accent: '#e63946',
        gold: '#f4a261',
        offWhite: '#f8fafc',
        lightGray: '#e2e8f0',
        textDark: '#1a202c',
        textGray: '#64748b',
      },
    },
  },
  plugins: [],
};

export default config;
