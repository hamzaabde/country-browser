import { Link } from 'react-router-dom'

import Detail from '@components/GridItemDetail'

export default function GridItem({ flags, name, alpha3Code, ...details }) {
	return (
		<Link to={`/${alpha3Code}`}>
			<div className="rounded-lg mx-6 xs:max-w-[420px] sm:max-w-auto xs:mx-auto flex flex-col overflow-hidden items-stretch transition bg-white dark:bg-dark-blue shadow-md">
				<div className="aspect-[3/1.75]">
					<img
						src={flags.svg}
						alt={name}
						className="aspect-[3/1.75] object-cover"
						loading="lazy"
					/>
				</div>
				<div className="m-3">
					<strong className="block m-3 text-lg leading-loose transition text-light-text/95 dark:text-white/95 sm:text-base font-extraBold">
						{name}
					</strong>
					<div className="flex flex-col m-3">
						{Object.entries(details).map((detail) => {
							const [key, value] = detail
							if (key !== 'independent')
								return <Detail key={key} label={key} data={value} />
						})}
					</div>
				</div>
			</div>
		</Link>
	)
}
