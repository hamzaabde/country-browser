import Container from '@components/Container'
import Country from '@pages/Country'
import Home from '@pages/Home'
import Search from '@pages/Search'

import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Container />}>
				<Route index element={<Home />} />
				<Route path="/search/:query" element={<Search />} />
				<Route path=":code" element={<Country />} />
			</Route>
		</Routes>
	)
}

export default App
