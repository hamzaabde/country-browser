import { useState, useCallback } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

import { useQueryClient } from 'react-query'

export default function SearchBar() {
	const [query, setQuery] = useState('')

	const queryClient = useQueryClient()

	const onSubmit = (e) => {
		e.preventDefault()

		queryClient.setQueryData('countries', [])
	}

	return (
		<form
			onSubmit={onSubmit}
			className="flex items-center transition-all bg-white rounded-md shadow-md grow sm:max-w-sm md:max-w-md lg:max-w-lg text-light-input/70 dark:bg-dark-blue dark:text-white/70 shadow-light-input/20 dark:shadow-black/5"
			// onSubmit={(e) => e.preventDefault()}
		>
			<label className="flex items-center px-4 py-1 space-x-2 grow flex-nowrap xs:px-8 xs:py-2 xs:space-x-4">
				<SearchIcon className="w-4 xs:w-5 grow-0 shrink-0" />
				<input
					type="search"
					className="focus:ring-0 p-2 bg-transparent text-[14px] text-light-input font-bold grow border-none dark:accent-white dark:text-white/70 placeholder:text-light-input/50 dark:placeholder:text-light-input placeholder:font-[400] "
					placeholder="Search for a country..."
					onChange={(e) => setQuery(e.target.value)}
				/>
			</label>
		</form>
	)
}
