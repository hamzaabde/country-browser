module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.jsx', './src/**/*.css'],
	theme: {
		fontWeight: {
			normal: '300',
			bold: '600',
			extraBold: '800',
		},
		extend: {
			screens: {
				xs: '375px',
				llg: '1440px',
			},
			fontFamily: { sans: ['Nunito Sans', 'Segoe UI', 'sans-serif'] },
			fontSize: {
				'home-items': '14px',
				'details-page': '16px',
			},
			colors: {
				//  Dark Blue (Dark Mode Elements)
				'dark-blue': 'hsl(209, 23%, 22%)',
				//  Very Dark Blue (Dark Mode Background)
				'dark-bg': 'hsl(207, 26%, 17%)',
				//  Very Dark Blue (Light Mode Text)
				'light-text': 'hsl(200, 15%, 8%)',
				//  Dark Gray (Light Mode Input)
				'light-input': 'hsl(0, 0%, 52%)',
				//  Very Light Gray (Light Mode Background)
				'light-bg': 'hsl(0, 0%, 98%)',
				//  White (Dark Mode Text & Light Mode Elements)
				'dark-text': 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-fluid-type'),
	],
}
