import { toTitleCase, toLowerCase } from '@utils/text-utils'

export default function Detail({ label, data }) {
	let parsedData =
		Array.isArray(data) && label !== 'border'
			? data.map(({ name }) => name).join(', ')
			: `${data}`

	if (label === 'border')
		return (
			<div className="text-xs flex flex-wrap space-x-3 my-4">
				{data.map(({ name }) => (
					<button
						key={name}
						className="bg-white py-[1px] px-8 rounded-sm button-shadow-sm hover:no-button-shadow-sm  text-light-text/70"
					>
						{toTitleCase(name)}
					</button>
				))}
			</div>
		)

	return (
		<div className="text-sm">
			<span className="text-light-text font-[700] mr-2">{label}:</span>
			<span className=" text-light-text/70">{toLowerCase(parsedData)}</span>
		</div>
	)
}
