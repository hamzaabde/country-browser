import DarkModeToggle from '@components/DarkModeToggle'

export default function Header() {
	return (
		<div className="flex items-center justify-between py-5 px-4 sm:px-8 md:py-4 md:px-14 bg-slate-800">
			<h1 className="text-white text-sm md:text-xl font-bold">
				Where in the world?
			</h1>
			<DarkModeToggle />
		</div>
	)
}
