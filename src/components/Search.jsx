import { SearchIcon } from '@heroicons/react/solid'

export default function Search() {
	return (
		<div className="focus-within:ring-blue-500/70 ring-offset-1 ring-offset-slate-900 focus-within:ring-1 mb-6 sm:mb-0 flex sm:mr-4 grow sm:max-w-sm items-center  bg-slate-800 py-1 px-5 rounded-sm">
			<SearchIcon className="text-white/70 w-5 shrink-0" />
			<input
				type="text"
				placeholder="Search for a country..."
				className="font-bold text-sm outline-none bg-inherit border-none text-white/70 focus:ring-0 shrink grow"
			/>
		</div>
	)
}
