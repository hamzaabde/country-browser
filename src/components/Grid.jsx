import { useState, useEffect } from 'react'
import fetchCountries from '@utils/fetchCountries'

export default function Grid() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			setData(await fetchCountries('all'))
		} catch (err) {
			setError(err)
		}
	}, [])

	console.log(data)

	return <h1 className="text-center text-4xl text-white">Hello World!</h1>
}
