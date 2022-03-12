import Detail from '@components/GridItemDetail'

export default function GridItem({ flags, name, ...details }) {
	const { nativeName, capital, population, region } = details
	const displayedDetails = { nativeName, capital, population, region }

	return (
		<div className="rounded-lg mx-6 xs:max-w-[420px] sm:max-w-auto xs:mx-auto flex flex-col overflow-hidden items-stretch bg-white shadow-md">
			<div>
				<img
					src={flags.svg}
					alt={name}
					className="aspect-[3/1.75] object-cover"
				/>
			</div>
			<div className="m-3">
				<strong className="text-light-text/95 block leading-loose text-xl sm:text-lg m-3 font-extraBold">
					{name}
				</strong>
				<div className="flex flex-col m-3">
					{Object.entries(displayedDetails).map((detail) => {
						const [key, value] = detail
						return <Detail key={key} label={key} data={value} />
					})}
				</div>
			</div>
		</div>
	)
}
