export default function Loading() {
	return (
		<div className="flex h-96 items-center justify-center col-span-full">
			<LoadingAnimation />
		</div>
	)
}

function LoadingAnimation() {
	return (
		<div className="flex flex-col items-center space-y-3">
			<div className="animate-bounce">
				<div className="rounded-full animate-spin w-10 h-10 gap-1 grid grid-cols-2 grid-rows-2 items-center content-center">
					{'1234'.split('').map((_) => (
						<div
							key={_}
							className="w-full h-full transition bg-emerald-500 rounded-full"
						></div>
					))}
				</div>
			</div>

			<strong className="text-lg transition text-light-text dark:text-white font-extraBold tracking-widest">
				Loading...
			</strong>
		</div>
	)
}
