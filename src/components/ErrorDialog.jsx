import { ExclamationCircleIcon as Light } from '@heroicons/react/outline'
import { ExclamationCircleIcon as Dark } from '@heroicons/react/solid'

export default function ErrorDialog({ error }) {
	return (
		<div className="col-span-full bg-red-200 mt-10 rounded-3xl mx-auto overflow-hidden">
			<div className="col-span-full flex items-center space-x-5 pr-5">
				<div className="self-stretch bg-red-300 px-8 py-6 flex flex-col">
					<Light className="w-8 text-red-500 inline mt-3" />
				</div>
				<strong className="tracking-wide text-red-500 text-base font-[700]">
					{error.message || 'Unexpected error happened, please reload the page'}
				</strong>
			</div>
		</div>
	)
}
