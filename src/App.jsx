import Container from '@components/Container'
import Header from '@components/Header'
import Nav from '@components/Nav'
import GridContainer from '@components/GridContainer'
import ItemPage from '@components/ItemPage'
import SearchBar from '@components/SearchBar'
import FilterMenu from '@components/FilterMenu'
import BackBtn from '@components/BackBtn'
import useCountries from '@hooks/useCountries'
import { Routes, Route } from 'react-router-dom'

function App() {
	const [data, error] = useCountries()

	return (
		<Routes>
			<Route path="/" element={<Container />}>
				<Route path="/">
					<Header />
				</Route>
				<Route path="/" element={<Nav />}>
					<Route
						path="/"
						element={
							<>
								<SearchBar />
								<FilterMenu />
							</>
						}
					/>
					<Route path="/:country" element={<BackBtn />} />
				</Route>
				<Route element={<GridContainer data={data} error={error} />} />
				<Route element={<ItemPage data={data} error={error} />} />
			</Route>
		</Routes>
	)
}

export default App
