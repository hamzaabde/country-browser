import SearchBar from '@components/SearchBar'
import FilterMenu from '@components/FilterMenu'
import BackBtn from '@components/BackBtn'

export default function Nav() {
	return (
		<div className="max-w-screen-xl w-full mx-auto">
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-stretch  justify-between mx-4 sm:mx-6 md:mx-8 sm:space-x-5">
				{/* <SearchBar />
				<FilterMenu /> */}
				<BackBtn />
			</div>
		</div>
	)
}
