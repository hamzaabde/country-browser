import Nav from '@components/Nav'
import SearchBar from '@components/SearchBar'
import FilterMenu from '@components/FilterMenu'
import GridContainer from '@components/GridContainer'

export default function Home() {
	return (
		<>
			<Nav>
				<SearchBar />
				<FilterMenu />
			</Nav>
			<GridContainer />
		</>
	)
}
