import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        // Czerwony z logo jako kolor firmowy
        brand: {
          ...colors.red,    // cała skala red jako baza
          500: '#F03A40',   // lekko jaśniejszy do stanów hover
          600: '#E21F26',   // PB red (główny)
          700: '#B71A1F',   // przyciemniony do hover/active
        },
      },
    },
   },
  plugins: [],
}