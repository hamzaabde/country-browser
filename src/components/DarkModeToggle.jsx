import { useState } from 'react'

import { MoonIcon } from '@heroicons/react/solid'

export default function DarkModeToggle() {
	return (
		<button className="flex justify-end flex-nowrap items-center">
			<MoonIcon className="text-white w-4" />
			<span className="ml-2 text-xs md:text-sm font-light text-white">
				Dark Mode
			</span>
		</button>
	)
}
