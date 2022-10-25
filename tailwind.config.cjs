/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		},
		extend: {
			colors: {
				'firefly': '#10393B',
				'black-bean': '#071313',
				'coral': '#FF8945',
				'mineral-green': '#3E5F60',
				'cape-cod' : '#303633',
				'emerald' : '#4EC275',
				'firefly' : '#0B2A30',
				'gallery':'#EEEEEE',
				'oslo-gray':'#809093'
			}
		},
	},
	plugins: [],
}
