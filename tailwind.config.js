/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fffaf2',
      'orange': '#fe7a38',
      'pink': '#ff50b0',
      'blue': '#6e44ff',
      'green': '#00c69d',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['motor'],
      serif: ['Bebas Neue']
    },
    extend: {
      backgroundImage: {
        'AboutUs-1': "url('/static/img1.jpeg')",
      }
    },
  },
  plugins: [],
}

