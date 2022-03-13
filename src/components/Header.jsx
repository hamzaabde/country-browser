import { useEffect } from 'react'
import ThemeToggler from '@components/ThemeToggler'

export default function Header() {
	return (
		<div className="bg-dark-text shadow-md shadow-black/10 border-black/10">
			<div className="max-w-screen-xl  xl:mx-auto flex items-center justify-between px-4 md:px-8 sm:px-6 xs:py-6 sm:py-8 py-4 flex-nowrap">
				<h1 className="text-[14px] xs:text-base font-[700] text-light-text">
					Where in the world?
				</h1>
				<ThemeToggler />
			</div>
		</div>
	)
}
