export default function InfoLabel({ label, info }) {
	return (
		<div className="mt-2 text-sm">
			<span className="font-medium text-white/90">{label}:</span>
			<span className="ml-2 font-normal text-white/60">{info}</span>
		</div>
	)
}
