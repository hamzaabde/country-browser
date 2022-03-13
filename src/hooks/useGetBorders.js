import { useState, useEffect, useMemo } from 'react'

export default function useGetBorder(codes, countries) {
	if (!Array.isArray(codes)) codes = [codes]

	const [borders, setBorders] = useState([])

	const result = useMemo(() => {
		if (countries && borders) {
			const result = countries.filter(({ alpha3Code }) => {
				return codes.includes(alpha3Code.toUpperCase())
			})

			console.log(result)
			setBorders(result)
		}
	}, [codes, countries])

	return borders
}
