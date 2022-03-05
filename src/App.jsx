import Header from '@components/Header'
import Controls from '@components/Controls'
import Grid from '@components/Grid'
import CountryPage from '@components/CountryPage'

function App() {
	return (
		<div className="min-h-screen pb-4 bg-slate-900">
			<Header />
			<Controls />
			{/* <Grid /> */}
			<CountryPage />
		</div>
	)
}

export default App
