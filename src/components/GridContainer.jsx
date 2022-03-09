import GridItem from '@components/GridItem'
import Loading from '@components/Loading'
import ErrorDialog from '@components/ErrorDialog'

export default function Grid({ data, error }) {
	return (
		<div className="max-w-screen-xl grow flex self-center w-full">
			<div className="grid grow mx-8">
				{error ? (
					// Error handling
					<ErrorDialog error={error} />
				) : data ? (
					// Data display
					data.map((country, i) => <GridItem key={i} country={country} />)
				) : (
					// Loading state
					<Loading />
				)}
				<GridItem />
			</div>
		</div>
	)
}
