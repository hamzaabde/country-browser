module.exports = {
	content: ['./src/**/*.jsx', './src/**/*.css'],
	theme: {
		extend: { fontFamily: { sans: ['Nunito Sans', 'Segoe UI', 'sans-serif'] } },
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-fluid-type'),
	],
}
