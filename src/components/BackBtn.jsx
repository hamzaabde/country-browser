import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function BackBtn() {
	return (
		<button className="bg-white py-1 px-7 hover:no-button-shadow transition cursor text-light-text/60 button-shadow active:outline-dotted active:no-button-shadow active:outline-blue-300 active:outline-[1px] rounded-sm items-center flex space-x-2 self-start">
			<ArrowLeftIcon className="w-4 mt-0.5 text-light-text" />
			<span>Back</span>
		</button>
	)
}
