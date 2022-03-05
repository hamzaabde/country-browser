import { useState, useEffect } from 'react'
import InfoLabel from '@components/InfoLabel'

export default function CountryPage() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			const res = await fetch(
				`https://restcountries.com/v2/name/usa?fields=nativeName,subRegion,topLevelDomain,language,currencies,borders,name,capital,population,region,flags`
			)
			setData(...(await res.json()))
		} catch (err) {
			setError(err)
		}
	}, [])

	console.log(data)
	console.log(error)

	return (
		<div className="flex flex-col mx-8 mt-8 md:flex-row sm:items-center sm:justify-between sm:mx-8 md:my-12 md:mx-14">
			{data && (
				<>
					{/* <div className="mr-20 grow aspect-w-4 aspect-h-2">
						<img className="object-cover" src={data.flags.svg} alt={`flag`} />
					</div> */}
					<div>
						<h2 className="text-lg font-medium text-white/95">{data.name}</h2>
						<div className="flex flex-col">
							<InfoLabel label="Native Name" info={data.nativeName} />
							<InfoLabel label="Population" info={data.population} />
							<InfoLabel label="Region" info={data.region} />
							<InfoLabel label="Sub Region" info={data.subRegion} />
							<InfoLabel label="Capital" info={data.capital} />
							<InfoLabel label="Top Level Domain" info={data.topLevelDomain} />
							<InfoLabel
								label="Currencies"
								info={data.currencies?.map(({ code }) => code).join(', ')}
							/>
							<InfoLabel label="Languages" info={data.languages?.join(', ')} />
						</div>
					</div>
				</>
			)}
		</div>
	)
}
