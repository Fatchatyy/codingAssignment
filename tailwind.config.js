/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navbar': '#212429',
        'purchase-button': '#377dff',
        'navlink': '#aebad1',
        'logo': '#fafafa',
        'card': '#282b2f',
        'purchase-text': '#ffffff',
        'p':'#ccdaf5',
        'contour':'#2c5297',
        'welcome':'#4579f5',
        'icon':'#2b2f37',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        'Title': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        'logo-size' : '2.1875rem'
      },
      

    },
  },
  plugins: [],
}

