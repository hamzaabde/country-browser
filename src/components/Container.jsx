export default function Container({ children }) {
	return (
		<div
			className={`${
				currentTheme == 'dark' ? value : null
			} min-h-screen bg-dark-bg`}
		>
			{children}
		</div>
	)
}
