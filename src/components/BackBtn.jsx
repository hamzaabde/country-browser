import { useState } from 'react'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

export default function BackBtn() {
	return (
		<button className="flex sm:ml-0 transition-all hover:ring-0 hover:bg-slate-800/70 sm:self-center self-start ml-3 items-center py-1 px-6 my-2 rounded-sm ring-[3px] ring-black/30  bg-slate-800">
			<div className="flex items-center justify-center">
				<ArrowNarrowLeftIcon className="text-white w-5 mt-[3px]" />
			</div>
			<span className="text-white/70 font-bold ml-2 text-sm">Back</span>
		</button>
	)
}
