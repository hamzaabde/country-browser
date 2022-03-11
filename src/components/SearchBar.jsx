import { SearchIcon } from '@heroicons/react/solid'

export default function SearchBar() {
	return (
		<form
			className="grow rounded-md sm:max-w-sm md:max-w-md lg:max-w-lg text-light-input/70 bg-white shadow-md shadow-light-input/20"
			onSubmit={(e) => e.preventDefault()}
		>
			<label className="flex flex-nowrap items-center py-1 px-4 xs:px-8 xs:py-2 space-x-2 xs:space-x-4">
				<SearchIcon className="w-4 xs:w-5 grow-0 shrink-0" />
				<input
					type="search"
					className="focus:ring-0 p-2 text-[14px] text-light-input font-bold grow border-none placeholder:text-light-input/50 placeholder:font-[400] "
					placeholder="Search for a country..."
				/>
			</label>
		</form>
	)
}
