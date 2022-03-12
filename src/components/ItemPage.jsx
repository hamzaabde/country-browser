import Detail from '@components/ItemPageDetail'

export default function ItemPage({ data, error }) {
	const { name, flags, borders, independent, ...details } = !!data && data[5]

	return (
		<div className="max-w-screen-xl mx-auto w-full flex md:items-center md:grow">
			<div className="mx-4 sm:mx-6 md:mx-8 mt-8 flex space-y-8 flex-col items-stretch justify-between">
				{data && (
					<>
						<div>
							<img className="aspect-[3/2]" src={flags.svg} alt={name} />
						</div>
						<div className="">
							<h2 className="text-xl font-extraBold text-light-text">{name}</h2>
						</div>
						<div className="flex flex-col">
							{Object.entries(details).map(([key, value]) => (
								<Detail key={key} label={key} data={value} />
							))}
						</div>
						<div className="flex flex-col">
							<h3>Border Countries:</h3>
							<Detail label="border" data={borders} />
						</div>
					</>
				)}
			</div>
		</div>
	)
}
