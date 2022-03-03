export default async function fetchCountries(region = 'all') {
	const baseUrl = 'https://restcountries.com/v3.1/'

	const res = await fetch(`${baseUrl}${region}`)
	const data = await res.json()

	return data
}
