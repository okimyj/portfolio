/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: true,
  theme: {
    extend: {
      fontSize: {
        pageTitle: ['3rem', { lineHeight: '1' }],
        profile: ['2.5rem', { lineHeight: '1.25' }],
        profileContents: ['1rem', { lineHeight: '1.7' }],
      },
      padding: {
        screenBase: '1.25rem',
      },
      minHeight: {
        woBasePadding: '100svh - 1.25rem * 2',
      },
      colors: {
        background: '#222',
        primary: '#32ffb9',
      },
    },
  },
  plugins: [],
};
