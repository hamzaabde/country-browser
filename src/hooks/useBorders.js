import { useState, useEffect } from 'react'

import useCountries from '@hooks/useCountries'

export default function useBorders(countryData) {
	const [borders, setBorders] = useState([])
	const [isDone, setIsDone] = useState(false)
	const { data, error } = useCountries()

	useEffect(() => {
		if (data && countryData) {
			const borders = data.filter((d) =>
				countryData.borders.includes(d.alpha3Code)
			)
			setBorders(borders)
			setIsDone(true)
		}
	}, [countryData, data])

	return { isDone, error, borders }
}
