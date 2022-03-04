import InfoLabel from '@components/InfoLabel'

export default function Card({ name, flags, population, region, capital }) {
	return (
		<div className="flex flex-col o bg-slate-800 rounded-md overflow-hidden">
			<div className="flex items-center aspect-w-2 aspect-h-1 h-40">
				<img
					className="w-full object-cover"
					src={flags.svg}
					alt={`${name} flag`}
				/>
			</div>
			<div className="flex m-4 mb-8 m-col text-white text-sm flex-col">
				<strong className="font-bold text-xl text-white/90">{name}</strong>
				<div className="flex flex-col text-sm mt-2">
					<InfoLabel label="Population" info={population} />
					<InfoLabel label="Region" info={region} />
					<InfoLabel label="Capital" info={capital} />
				</div>
			</div>
		</div>
	)
}
