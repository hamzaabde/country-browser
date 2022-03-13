import Container from '@components/Container'
import Header from '@components/Header'
import Nav from '@components/Nav'
import GridContainer from '@components/GridContainer'
import ItemPage from '@components/ItemPage'

import useCountries from '@hooks/useCountries'

function App() {
	const [data, error] = useCountries()

	return (
		<Container>
			<Header />
			<Nav />
			{/* <GridContainer data={data} error={error} /> */}
			<ItemPage data={data} error={error} />
		</Container>
	)
}

export default App
