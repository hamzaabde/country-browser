import Search from '@components/Search'
import Filter from '@components/Filter'
import BackBtn from '@components/BackBtn'

export default function Controls() {
	return (
		<div className="flex mx-4 sm:mx-8 md:20 sm:flex-row flex-col sm:items-center justify-between md:mx-14 sm:mt-6 mt-4 md:mt-8">
			{/* <Search />
			<Filter /> */}
			<BackBtn />
		</div>
	)
}
