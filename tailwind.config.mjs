/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ptSans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
				ibarra: ['"Ibarra Real Nova"', ...defaultTheme.fontFamily.serif],
			},
			boxShadow: {
				'3xl': '0 0 80px rgba(4, 15, 217, 0.6)',
			},
		},
	},
	plugins: [],
}
