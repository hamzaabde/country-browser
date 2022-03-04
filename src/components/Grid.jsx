import { useState, useEffect } from 'react'
import Card from '@components/Card'

export default function Grid() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			const res = await fetch(
				`https://restcountries.com/v2/region/europe?fields=name,capital,population,region,flags`
			)
			setData(await res.json())
		} catch (err) {
			setError(err)
		}
	}, [])

	console.log(data)
	console.log(error)

	return (
		<div className="grid gap-10  sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-8 sm:mx-8 md:my-12 md:mx-14 mt-8">
			{data && data.map((country) => <Card {...country} />)}
		</div>
	)
}
