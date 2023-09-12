/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: '#EF4444',
        success: '#10B981',
        caution: '#F59E0B',
        white: '#ffffff',
        black: '#000000',
        green: {
          light: '#00B37E',
          dark: '#00875F'
        },
        red: {
          light: '#F75A68',
          dark: '#AA2834'
        },
        gray: {
          10: '#E1E1E6',
          20: '#C4C4CC',
          30: '#7C7C8A',
          40: '#323238',
          50: '#29292E',
          60: '#202024',
          70: '#121214',
        },
      },
      fontFamily: {
        roboto_reg: 'Roboto_400Regular',
        roboto_bold: 'Roboto_700Bold'
      },
      fontSize: {
        SM: 14,
        MD: 16,
        LG: 18,
        XL: 24
      }
    },
  },
  plugins: [],
}

