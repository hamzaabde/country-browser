import { MoonIcon as Dark } from '@heroicons/react/solid'
import { MoonIcon as Light } from '@heroicons/react/outline'

export default function ThemeToggler({ theme }) {
	return (
		<button
			onClick={() => theme.setIsDark(!theme.isDark)}
			className="flex items-center px-1 py-2 space-x-1 xs:space-x-1 rounded-md flex-nowrap text-light-text dark:text-white transition"
		>
			<div className="flex items-center justify-center">
				{theme.isDark ? (
					<Dark className="w-4 xs:w-5" />
				) : (
					<Light className="w-4 xs:w-5" />
				)}
			</div>
			<span className="text-[12px] xs:text-sm font-[600] opacity-90">
				Dark Mode
			</span>
		</button>
	)
}
