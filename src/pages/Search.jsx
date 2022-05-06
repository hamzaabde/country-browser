import Nav from '@components/Nav'
import SearchBar from '@components/SearchBar'
import FilterMenu from '@components/FilterMenu'
import GridContainer from '@components/GridContainer'

import { useParams } from 'react-router-dom'

export default function Home() {
	const { query } = useParams()

	return (
		<>
			<Nav>
				<SearchBar />
				<FilterMenu />
			</Nav>
			<GridContainer searchQuery={query} />
		</>
	)
}
