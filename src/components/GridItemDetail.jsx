import { toTitleCase, toLowerCase } from '@utils/text-utils'

export default function Detail({ label, data }) {
	return (
		<div key={label}>
			<span className="text-light-text dark:text-white/80 text-xs font-[700] mr-2">
				{toTitleCase(label)}:
			</span>
			<span className="text-xs text-light-text/70 dark:text-white/70">
				{toLowerCase(data)}
			</span>
		</div>
	)
}
