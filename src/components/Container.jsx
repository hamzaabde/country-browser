import Header from '@components/Header'
import { Outlet } from 'react-router-dom'

import useTheme from '@hooks/useTheme'

export default function Container() {
	const [isDark, setIsDark] = useTheme()

	return (
		<div className={isDark ? 'dark' : ''}>
			<div className=" min-h-screen transition-all bg-light-bg dark:bg-dark-bg flex space-y-6 md:space-y-8 lg:space-y-12 flex-col items-stretch">
				<Header theme={{ isDark, setIsDark }} />
				<Outlet />
			</div>
		</div>
	)
}
