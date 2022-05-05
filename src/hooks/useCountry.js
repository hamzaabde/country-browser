import { useQuery } from 'react-query'

import { fetchCountry } from '@utils/api'

export default function useCountry(code) {
	const query = useQuery(code, fetchCountry(code))

	return query
}
