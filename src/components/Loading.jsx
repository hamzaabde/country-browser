export default function Loading() {
	return (
		<div className="flex h-96 items-center justify-center col-span-full">
			<LoadingAnimation />
		</div>
	)
}

function LoadingAnimation() {
	return (
		<div className="flex flex-col items-center space-y-5">
			<div className="animate-bounce">
				<div className="rounded-full animate-spin w-20 h-20 gap-2 grid grid-cols-2 grid-rows-2 items-center content-center">
					{'1234'.split('').map((_) => (
						<div
							key={_}
							className="w-full h-full bg-blue-900 rounded-full"
						></div>
					))}
				</div>
			</div>

			<strong className="text-xl text-light-text font-extraBold tracking-widest">
				Loading...
			</strong>
		</div>
	)
}
