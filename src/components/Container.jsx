export default function Container({ children }) {
	return (
		<div
			className={` min-h-screen bg-light-bg flex space-y-6 md:space-y-8 lg:space-y-12 flex-col items-stretch`}
		>
			{children}
		</div>
	)
}
