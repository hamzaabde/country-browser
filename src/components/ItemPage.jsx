import Detail from '@components/ItemPageDetail'
import ErrorDialog from '@components/ErrorDialog'
import Loading from '@components/Loading'

import useCountry from '@hooks/useCountry'

import { useParams } from 'react-router-dom'
import useBorders from '@hooks/useBorders'

// import useGetBorders from '@hooks/useGetBorders'

export default function ItemPage() {
	const { code } = useParams()
	const { data, isLoading, isError, error } = useCountry(code)
	const { isDone, borders } = useBorders(data)

	if (isLoading) {
		return (
			<div className="w-full max-w-screen-xl mx-auto md:items-center">
				<div className="mx-4 mt-6 sm:mx-6 md:mx-8 h-min">
					<Loading />
				</div>
			</div>
		)
	}

	if (isError || data.status == 400) {
		return (
			<div className="w-full max-w-screen-xl mx-auto md:items-center">
				<div className="mx-4 mt-6 sm:mx-6 md:mx-8 h-min">
					<ErrorDialog error={error || data} />
				</div>
			</div>
		)
	}

	return (
		<div className="w-full max-w-screen-xl mx-auto md:items-center">
			<div className="mx-4 mt-6 sm:mx-6 md:mx-8 h-min">
				{/* ________ */}
				<div className="flex flex-col items-stretch pb-12 space-y-8 lg:pb-4 xl:pb-0 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-start lg:justify-between max-w-screen-xs md:max-w-none">
					<img
						className="aspect-[3/2] lg:w-1/2 shrink max-w-screen-sm object-cover"
						src={data.flags.svg}
						alt={data.name}
					/>
					<div className="flex flex-col items-start space-y-8 ">
						<h2 className="max-w-full text-lg lg:text-xl font-extraBold text-light-text dark:text-dark-text">
							{data.name}
						</h2>
						<CountryDetails details={data} />
						<div className="flex flex-col lg:pt-8">
							<h3 className="tracking-wide font-extraBold text-light-text/95 dark:text-dark-text/70">
								Border Countries:
							</h3>
							{isDone && <Detail label="borders" data={borders} />}
						</div>
					</div>
				</div>
				{/* ________ */}
			</div>
		</div>
	)
}

function CountryDetails({ details }) {
	const {
		nativeName,
		capital,
		region,
		population,
		topLevelDomain,
		languages,
		currencies,
		subRegion,
	} = details

	return (
		<div className="flex flex-col flex-wrap md:gap-x-12 md:flex-row">
			<div>
				<Detail label="Native Name" data={nativeName} />
				<Detail label="Population" data={population} />
				<Detail label="Region" data={region} />
				<Detail label="Sub Region" data={subRegion} />
				<Detail label="Capital" data={capital} />
			</div>
			<div>
				<Detail label="Top Level Domain" data={topLevelDomain} />
				<Detail label="Currencies" data={currencies} />
				<Detail label="Languages" data={languages} />
			</div>
		</div>
	)
}
