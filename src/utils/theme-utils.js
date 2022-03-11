const THEMES = ['dark', 'light']

export function toggleTheme(currentTheme) {
	return THEMES.filter((theme) => THEMES.find(currentTheme) !== theme).join('')
}

export function saveCurrentTheme(currentTheme) {
	window.localStorage.setItem('theme', currentTheme)
}

export function getSavedTheme() {
	const savedTheme = window.localStorage.getItem('theme')

	if (!savedTheme) return 'light'

	return savedTheme
}
