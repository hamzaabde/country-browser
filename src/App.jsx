import Header from '@components/Header'
import Controls from '@components/Controls'
import Grid from '@components/Grid'
import CountryPage from '@components/CountryPage'

function App() {
	return (
		<div className="bg-slate-900 pb-4 min-h-screen">
			<Header />
			<Controls />
			{/* <Grid /> */}
			<CountryPage />
		</div>
	)
}

export default App
