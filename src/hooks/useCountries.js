import { useState, useEffect } from 'react'

export default function useAllCountries() {
	const [result, setResult] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			setResult(await fetchAllCountries())
			setError(null)
		} catch (error) {
			setError(error)
		}
	}, [])

	return [result, error]
}

// export default function useAllCountries() {
// 	const [allCountries, setAllCountries] = useState(null)
// 	const [error, setError] = useState(null)

// 	const [filteredCountries, setFilteredCountries] = useState([])
// 	const [region, setRegion] = useState('all')

// 	// Fetch all countries
// 	useEffect(async () => {
// 		if (!allCountries) {
// 			try {
// 				const result = await fetchAllCountries()
// 				setAllCountries(result)
// 				setFilteredCountries(filterByRegion(result, region))
// 				setError(null)
// 			} catch (error) {
// 				setError(error)
// 			}
// 		} else {
// 			console.log('filtered: ', filteredCountries)

// 			setFilteredCountries(filterByRegion(allCountries, region))
// 		}
// 	}, [region, allCountries])

// 	function changeFilter(region) {
// 		setRegion(region)
// 	}

// 	return [error, filteredCountries, changeFilter]
// }

function fetchAllCountries() {
	return new Promise(async (resolve, reject) => {
		const baseUrl =
			'https://restcountries.com/v2/all?fields=name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages,borders,flags,alpha3Code'

		try {
			const res = await fetch(baseUrl)
			const data = await res.json()

			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
}

function filterByRegion(allCountries, region) {
	if (region.toLowerCase() === 'all') return allCountries

	console.time('filter')
	const filteredCountries = allCountries.filter(
		(country) => country.region.toLowerCase() === region.toLowerCase()
	)
	console.timeEnd('filter')

	return filteredCountries
}
