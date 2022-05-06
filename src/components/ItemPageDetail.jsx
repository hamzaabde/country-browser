import { Link } from 'react-router-dom'

import { toTitleCase, toLowerCase } from '@utils/text-utils'

export default function Detail({ label, data }) {
	let parsedData =
		Array.isArray(data) && label !== 'border'
			? data.map(({ name }) => name).join(', ')
			: `${data}`

	if (label === 'borders')
		return (
			<div className="flex flex-wrap max-w-md gap-3 my-4 text-xs xl:max-w-lg">
				{data.map(({ name, alpha3Code }) => (
					<div
						key={name}
						className="transition-all bg-white rounded-sm ring-1 ring-black/20 dark:ring-white/20 dark:bg-dark-blue dark:hover:bg-white/10 hover:bg-slate-50/90 button-shadow-sm hover:no-button-shadow-sm dark:text-white/70 text-light-text/70"
					>
						<Link to={`/${alpha3Code}`} className="py-[1px] px-8 ">
							{toTitleCase(name)}
						</Link>
					</div>
				))}
			</div>
		)

	return (
		<div className="text-sm" key={label}>
			<span className="text-light-text dark:text-white/80 font-[700] mr-2">
				{label}:
			</span>
			<span className=" text-light-text/70 dark:text-white/60">
				{toLowerCase(parsedData)}
			</span>
		</div>
	)
}
