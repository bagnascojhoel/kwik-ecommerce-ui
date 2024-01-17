/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: [
        'Ubuntu',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        '"Fira Code"',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ]
    },
    
    extend: {
      colors: {
        'black': '#262321',
        'orange': {
          700: '#F97316',
          600: '#FB923C',
        },
        'gray': {
          700: '#B9BBBD',
          100: '#F8FAFC',
        }
      },
      screens: {
        '2xs': '320px',
        'xs': '475px',
      }
    },
  },
  plugins: [],
};
