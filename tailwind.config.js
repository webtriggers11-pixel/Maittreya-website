/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#004953',
          700: '#003d44',
          800: '#003240',
          900: '#002a2f',
        },
        cyan: {
          DEFAULT: '#AAEEFF',
          soft: 'rgba(170, 238, 255, 0.2)',
        },
        amber: {
          DEFAULT: '#E8A020',
          hover: '#d4911a',
        },
        paper: '#FDFEFE',
        ink: {
          DEFAULT: '#0B1418',
          soft: '#3A4A50',
        },
        line: '#E6ECEE',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: 'var(--mt-radius, 16px)',
      },
    },
  },
  plugins: [],
};

module.exports = config;
