import FilterContext from '@/filter-context'

import { useState } from 'react'

export default function filterContextProvider({ children }) {
	const [type, setType] = useState('all')

	return (
		<FilterContext.Provider
			value={{
				type,
				changeType(newType) {
					setType(newType)
				},
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}
