import Detail from '@components/ItemPageDetail'
import useGetBorders from '@hooks/useGetBorders'

export default function ItemPage({ data, error }) {
	const { name, flags, borders, independent, ...details } = !!data && data[5]
	const borderDetail = useGetBorders(borders, data)

	return (
		<div className="max-w-screen-xl mx-auto w-full  md:items-center">
			<div className="mx-4 sm:mx-6 md:mx-8 mt-6 h-min">
				{data && (
					<div className="flex flex-col items-stretch space-y-8 lg:space-y-0 lg:flex-row lg:space-x-28 lg:items-center lg:justify-between max-w-screen-xs md:max-w-none">
						<img
							className="aspect-[3/2] lg:w-1/2 shrink max-w-screen-sm object-cover"
							src={flags.svg}
							alt={name}
						/>
						<div className="flex grow shrink-0 flex-col space-y-8">
							<h2 className="text-xl lg:text-2xl font-extraBold text-light-text">
								{name}
							</h2>
							<CountryDetails details={details} />
							<div className="flex flex-col lg:pt-8">
								<h3 className="font-extraBold tracking-wide">
									Border Countries:
								</h3>
								<Detail label="border" data={borderDetail} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

function CountryDetails({ details }) {
	const {
		nativeName,
		capital,
		region,
		population,
		topLevelDomain,
		languages,
		currencies,
		subRegion,
	} = details

	return (
		<div className="flex flex-col md:space-x-12 md:flex-row flex-wrap">
			<div>
				<Detail label="Native Name" data={nativeName} />
				<Detail label="Population" data={population} />
				<Detail label="Region" data={region} />
				<Detail label="Sub Region" data={subRegion} />
				<Detail label="Capital" data={capital} />
			</div>
			<div>
				<Detail label="Top Level Domain" data={topLevelDomain} />
				<Detail label="Currencies" data={currencies} />
				<Detail label="Languages" data={languages} />
			</div>
		</div>
	)
}
