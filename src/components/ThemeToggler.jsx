import { MoonIcon } from '@heroicons/react/solid'

export default function ThemeToggler() {
	return (
		<div className="flex items-center px-1 py-2 space-x-1 transition rounded-md flex-nowrap text-dark-text">
			<div className="flex items-center justify-center">
				<MoonIcon className="w-4" />
			</div>
			<span className="text-xs font-thin opacity-90">Dark Mode</span>
		</div>
	)
}
