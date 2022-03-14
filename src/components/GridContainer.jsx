import GridItem from '@components/GridItem'
import Loading from '@components/Loading'
import ErrorDialog from '@components/ErrorDialog'

import { useData, actions } from '@/data-context'

export default function GridContainer(props) {
	const context = useData()
	console.log(context)

	return (
		<div className="max-w-screen-xl flex self-center w-full">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 grow mx-4 sm:mx-6 md:mx-8">
				<Grid {...props} />
			</div>
		</div>
	)
}

function Grid({ data, error }) {
	return (
		<>
			{error ? (
				// Error handling
				<ErrorDialog error={error} />
			) : data ? (
				// Data display
				data.slice(0, 12).map((country, i) => <GridItem key={i} {...country} />)
			) : data && !data.length ? (
				<div></div>
			) : (
				// Loading state
				<Loading />
			)}
		</>
	)
}
