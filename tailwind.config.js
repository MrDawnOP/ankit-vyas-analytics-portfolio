/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#020617',
        secondary: '#0f172a',
        accent: '#67e8f9',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
};