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
			setData(await res.json())
		} catch (err) {
			setError(err)
		}
	}, [])

	console.log(data)
	console.log(error)

	return (
		<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mx-8 sm:mx-8 md:my-12 md:mx-14 mt-8">
			{data && (
				// 	/* <div className="flex items-center aspect-w-2 aspect-h-1 w-96 h-48">
				// 	{data && (
				// 		<img
				// 			className="h-full object-cover"
				// 			src={data[0].flags.svg}
				// 			alt={`flag`}
				// 		/>
				// 	)}
				// </div> */
				<div>
					<h2 className="text-lg text-white/95 font-medium">{data[0].name}</h2>
					<div className="flex flex-col">
						<InfoLabel label="Test" info="another test" />
					</div>
				</div>
			)}
		</div>
	)
}
