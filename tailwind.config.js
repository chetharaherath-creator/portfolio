/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pantone: {
          alabaster: '#F7F2EA',
          'alabaster-light': '#FDFBF7',
          'alabaster-muted': '#EFE7DB',
          plum: '#543244',
          'plum-light': '#6E435B',
          'plum-dark': '#3C1F2F',
          olive: '#656744',
          'olive-light': '#7B7E55',
          'olive-dark': '#4F5234',
        },
        charcoal: {
          900: '#1A1618',
          800: '#262024',
          700: '#3D343A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Times New Roman', 'serif'],
        sans: ['"Roboto Flex"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}
