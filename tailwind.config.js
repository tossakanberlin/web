/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '440px',
			md: '976px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px'
		},
		colors: {
			white: '#fffaf2',
			orange: '#fe7a38',
			pink: '#ff50b0',
			pink_light: '#ff9dd3',
			blue: '#6e44ff',
			blue_light: '#bbbdf6',
			green: '#00c69d',
			green_light: '#c5ebc3',
			black: '#000000',
			slate: colors.slate,
			red: colors.red
		},
		fontFamily: {
			sans: ['motor'],
			serif: ['Bebas Neue']
		},
		extend: {
			backgroundImage: {
				'AboutUs-1': "url('/img1.jpeg')"
			}
		}
	},
	plugins: []
}
