import Search from '@components/Search'
import Filter from '@components/Filter'

export default function Controls() {
	return (
		<div className="flex mx-4 sm:mx-8 md:20 sm:flex-row flex-col sm:items-center justify-between md:mx-14 sm:mt-6 mt-4 md:mt-8">
			<Search />
			<Filter />
		</div>
	)
}
