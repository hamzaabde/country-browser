import { createContext } from 'react'

import Container from '@components/Container'
import Country from '@pages/Country'
import Home from '@pages/Home'
import { fetchData } from '@utils/api'
import { Routes, Route } from 'react-router-dom'

import { useQuery } from 'react-query'

function App() {
	// const [data, error] = useCountries()
	const result = useQuery('countries', fetchData)

	return (
		<Routes>
			<Route path="/" element={<Container />}>
				<Route index element={<Home />} />
				<Route path=":country" element={<Country />} />
			</Route>
		</Routes>
	)
}

export default App
