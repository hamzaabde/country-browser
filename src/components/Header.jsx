import ThemeToggler from '@components/ThemeToggler'

export default function Header() {
	return (
		<div className="bg-dark-blue">
			<div className="flex items-center justify-between px-4 py-8 flex-nowrap">
				<h1 className="text-sm font-bold text-dark-text">
					Where in the world?
				</h1>
				<ThemeToggler />
			</div>
		</div>
	)
}
