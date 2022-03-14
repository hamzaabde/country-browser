import { useReducer, createContext } from 'react'
import { useContext } from 'react/cjs/react.production.min'

export const DataContext = createContext()

export const actions = {
	filter: 'FIlTER',
	search: 'SEARCH',
	reset: 'RESET',
}

export function dataReducer(state, action) {
	switch (action.type) {
		case actions.filter:
			// return filter(state, action.payload)
			return 'Filtered data... ' + action.payload
		case actions.search:
			// return search(state, action.payload)
			return 'Search result data... ' + action.payload
		case actions.reset:
			// return reset()
			return 'Data reset to initial state...'
		default:
			throw new Error('unhandled action type: ' + action.type)
	}
}

export function useData() {
	const context = useContext(DataContext)

	if (context === undefined)
		throw new Error('useCount must be used within a CountProvider')

	return context
}
