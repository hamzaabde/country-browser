import GridItem from '@components/GridItem'
import Loading from '@components/Loading'
import ErrorDialog from '@components/ErrorDialog'

import useCountries from '@hooks/useCountries'

export default function GridContainer() {
	const countries = useCountries()

	return (
		<div className="max-w-screen-xl flex self-center w-full pb-24">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 grow mx-4 sm:mx-6 md:mx-8">
				<Grid {...countries} />
			</div>
		</div>
	)
}

function Grid({ data, error, isLoading }) {
	if (error) return <ErrorDialog error={error} />

	if (isLoading) return <Loading />

	return (
		<>
			{data.map((country, i) => (
				<GridItem key={i} {...country} />
			))}
		</>
	)
}
