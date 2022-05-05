import { useQuery } from 'react-query'
import { fetchAllCountries } from '@utils/api'

export default function useCountries() {
	const query = useQuery('countries', fetchAllCountries, {
		cacheTime: Infinity,
	})

	return query
}
