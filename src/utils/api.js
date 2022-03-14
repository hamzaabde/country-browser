export async function fetchData() {
	const baseUrl =
		'https://restcountries.com/v2/all?fields=name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages,borders,flags,alpha3Code'

	const res = await fetch(baseUrl)
	return await res.json()
}
