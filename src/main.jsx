import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
