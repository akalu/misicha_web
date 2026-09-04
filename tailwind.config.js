/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC837',
          sun: '#FF8008',
          orange: '#FF5722',
          red: '#E53935',
          dark: '#2A1810',
          darkLight: '#3D281E',
          cream: '#FFFBF5',
          warmWhite: '#FCF9F6',
          sand: '#F7EFE5',
        },
        michi: {
          50: '#fff8f1',
          100: '#feeedc',
          200: '#fcd9b7',
          300: '#f9bc87',
          400: '#f59453',
          500: '#f16f24',
          600: '#e25117',
          700: '#bb3c14',
          800: '#953118',
          900: '#782b17',
          950: '#41130a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Fredoka', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(241, 111, 36, 0.2)',
        'warm-lg': '0 20px 40px -15px rgba(241, 111, 36, 0.25)',
      },
      backgroundImage: {
        'michi-gradient': 'linear-gradient(135deg, #FFC837 0%, #FF8008 50%, #E53935 100%)',
        'michi-soft': 'linear-gradient(135deg, #FFF5EB 0%, #FFEDD5 100%)',
      }
    },
  },
  plugins: [],
}
