/**
 * Tailwind configuration
 *
 * This file defines custom colours and enables dark mode via class names.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#112240',
        accent: '#64ffda',
        light: '#F5F5F5'
      },
    },
  },
  plugins: [],
};