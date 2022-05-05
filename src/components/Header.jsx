import { Link } from 'react-router-dom'
import ThemeToggler from '@components/ThemeToggler'

export default function Header({ theme }) {
	return (
		<div className="bg-dark-text dark:bg-dark-blue shadow-md shadow-black/10 border-black/10">
			<div className="max-w-screen-xl  xl:mx-auto flex items-center justify-between px-4 md:px-8 sm:px-6 xs:py-6 sm:py-8 py-4 flex-nowrap">
				<Link to="/">
					<h1 className="transition text-[14px] xs:text-base font-[700] text-light-text dark:text-white">
						Where in the world?
					</h1>
				</Link>
				<ThemeToggler theme={theme} />
			</div>
		</div>
	)
}
