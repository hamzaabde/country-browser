import { Outlet } from 'react-router-dom'

export default function Container() {
	return (
		<div
			className={` min-h-screen bg-light-bg flex space-y-6 md:space-y-8 lg:space-y-12 flex-col items-stretch`}
		>
			<Outlet />
		</div>
	)
}
