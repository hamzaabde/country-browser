import { useReducer } from 'react'

import Header from '@components/Header'
import { Outlet } from 'react-router-dom'

import { DataContext, dataReducer } from '@/data-context'

function Container() {
	return (
		<div
			className={` min-h-screen bg-light-bg flex space-y-6 md:space-y-8 lg:space-y-12 flex-col items-stretch`}
		>
			<Header />
			<Outlet />
		</div>
	)
}

export default function () {
	const [data, dispatch] = useReducer(dataReducer, [])

	const value = { data, dispatch }

	return (
		<DataContext.Provider value={value}>
			<Container />
		</DataContext.Provider>
	)
}
