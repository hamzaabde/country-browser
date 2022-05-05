export async function fetchAllCountries() {
	const baseUrl =
		'https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code'

	const res = await fetch(baseUrl)
	return await res.json()
}

export function fetchCountry(code) {
	return async () => {
		const baseUrl = `
        https://restcountries.com/v2/alpha/${code}?fields=name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages,borders,flags,alpha3Code`

		const res = await fetch(baseUrl)
		return await res.json()
	}
}
