/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'overlay-dark': 'rgba(0, 0, 0, 0.6)',
			},
		},
	},
	plugins: [],
};
