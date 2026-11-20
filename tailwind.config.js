/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          deep: '#1A4D80',
          primary: '#2B6CB0',
          vibrant: '#5DA9FF',
          soft: '#CFE9FF',
          light: '#EAF4FE',
          tint: '#F5FAFF',
        },
        choco: {
          dark: '#3A201B',
          rich: '#4A2A23',
          warm: '#6D3F33',
          mocha: '#8A5343',
          caramel: '#C88E58',
          cream: '#FBF5EE',
        },
        meadow: {
          leaf: '#A8C97A',
          stem: '#80A854',
          tint: '#F3F9EA',
        },
        choc: {
          dark: '#28163E',       // Transformed to Deep Royal Violet / Plum
          milk: '#5C4478',       // Rich muted amethyst
          caramel: '#8E76A8',    // Soft lavender slate
          light: '#F5F0FB',      // Pastel lavender light
        },
        berry: {
          soft: '#F5F0FB',       // Dreamy lavender mist
          blush: '#E8DCF8',      // Soft floral lilac
          punch: '#9B6FE4',      // Radiant lavender purple
        },
        lavender: {
          50: '#FAF7FE',
          100: '#F5F0FB',
          200: '#EAE1FA',
          300: '#D8C7F5',
          400: '#B899EE',
          500: '#9B6FE4',
          600: '#7F4CD1',
          700: '#6434AD',
          800: '#46217A',
          900: '#28163E',
        },
        petal: {
          50: '#FDF7FB',
          100: '#FCEEF6',
          200: '#F9D8ED',
          300: '#F3B8DF',
          400: '#E786C8',
          500: '#D870B8',
          600: '#BE4B9B',
        },
        cream: {
          card: '#FFFFFF',
          tint: '#FBF9FE',
        }
      },
      borderRadius: {
        'dock': '32px',
        'pill': '9999px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
