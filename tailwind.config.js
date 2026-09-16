/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Oficial de Colores Misicha Perú
        brand: {
          orange: '#F47C20',       // Naranja vibrante oficial
          bone: '#FFF4E8',         // Blanco cálido / Hueso oficial
          warmWhite: '#FFF4E8',    // Blanco cálido / Hueso
          marfil: '#FFFCF7',       // Blanco marfil oficial
          cream: '#FFFCF7',        // Blanco marfil (base canvas)
          coffee: '#6B4A35',       // Marrón café oficial
          brown: '#6B4A35',        // Marrón café
          peach: '#FFD2A6',        // Melocotón claro oficial
          dark: '#2B2B2B',         // Gris oscuro / Antracita oficial
          anthracite: '#2B2B2B',   // Gris oscuro / Antracita
          vanilla: '#FFE6A7',      // Amarillo suave / Vainilla oficial
          yellow: '#FFE6A7',       // Amarillo suave
        },
        michi: {
          50: '#FFF4E8',           // Blanco cálido / Hueso
          100: '#FFEAD4',          // Tono suave
          200: '#FFD2A6',          // Melocotón claro oficial
          300: '#FFB87B',          // Melocotón medio
          400: '#FA9644',          // Naranja claro
          500: '#F47C20',          // Naranja vibrante oficial
          600: '#DB620C',          // Naranja profundo (hover/active)
          700: '#B34709',          // Naranja tostado
          800: '#8E350C',          // Óxido
          900: '#6B4A35',          // Marrón café oficial
          950: '#2B2B2B',          // Gris oscuro / Antracita oficial
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Fredoka', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(244, 124, 32, 0.25)',
        'warm-lg': '0 20px 40px -15px rgba(244, 124, 32, 0.3)',
      },
      backgroundImage: {
        'michi-gradient': 'linear-gradient(135deg, #F47C20 0%, #DB620C 50%, #6B4A35 100%)',
        'michi-soft': 'linear-gradient(135deg, #FFFCF7 0%, #FFF4E8 100%)',
        'michi-warm': 'linear-gradient(135deg, #FFE6A7 0%, #FFD2A6 50%, #F47C20 100%)',
      }
    },
  },
  plugins: [],
}
