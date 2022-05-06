import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

import { BrowserRouter as Router } from 'react-router-dom'

import FilterContextProvider from '@components/FilterContextProvider'

ReactDOM.render(
	<React.StrictMode>
		<FilterContextProvider>
			<QueryClientProvider client={queryClient}>
				<Router>
					<App />
				</Router>
			</QueryClientProvider>
		</FilterContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
