import FilterContext from '@/filter-context'

import GridItem from '@components/GridItem'
import Loading from '@components/Loading'
import ErrorDialog from '@components/ErrorDialog'

import useCountries from '@hooks/useCountries'

export default function GridContainer({ searchQuery }) {
	const countries = useCountries()

	return (
		<div className="flex self-center w-full max-w-screen-xl pb-24">
			<div className="grid grid-cols-1 gap-10 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow sm:mx-6 md:mx-8">
				<Grid searchQuery={searchQuery} {...countries} />
			</div>
		</div>
	)
}

function Grid({ searchQuery, data, error, isLoading }) {
	if (error) return <ErrorDialog error={error} />

	if (isLoading) return <Loading />

	if (searchQuery) {
		const regex = new RegExp(`(\^${searchQuery})`, 'gi')

		const filteredData = data.filter((country) => regex.test(country.name))

		console.log(filteredData)

		return (
			<>
				{filteredData.length > 0 ? (
					filteredData.map((country, i) => <GridItem key={i} {...country} />)
				) : (
					<h2 className="col-span-3 text-lg font-bold text-center">
						Nothing was found
					</h2>
				)}
			</>
		)
	}

	return (
		<FilterContext.Consumer>
			{({ type }) => (
				<>
					{data
						.filter(({ region }) => {
							if (type === 'all') return true

							return region.toLowerCase() === type
						})
						.map((country, i) => (
							<GridItem key={i} {...country} />
						))}
				</>
			)}
		</FilterContext.Consumer>
	)
}
