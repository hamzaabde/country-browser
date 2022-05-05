import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function BackBtn() {
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate(-1)}
			className="bg-white dark:bg-dark-blue transition-all py-1 px-7  cursor text-light-text/60 ring-2 ring-slate-400/5 shadow-lg dark:ring-black/5 dark:shadow-xl dark:shadow-dark-black dark:text-white/70 active:outline-dotted active:no-button-shadow active:outline-blue-300 active:outline-[1px] rounded-sm items-center flex space-x-2 self-start"
		>
			<ArrowLeftIcon className="w-4 mt-0.5 transition text-light-text dark:text-white/70" />
			<span>Back</span>
		</button>
	)
}
