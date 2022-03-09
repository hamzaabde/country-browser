export default function Container({ children }) {
	return (
		<div className={` min-h-screen bg-light-bg flex flex-col items-stretch`}>
			{children}
		</div>
	)
}
