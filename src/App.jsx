import Container from '@components/Container'
import Header from '@components/Header'
import Nav from '@components/Nav'
import GridContainer from '@components/GridContainer'

import useCountries from '@hooks/useCountries'

function App() {
	const { data, error } = useCountries()

	return (
		<Container>
			<Header />
			<Nav />
			<GridContainer data={data} error={error} />
		</Container>
	)
}

export default App
