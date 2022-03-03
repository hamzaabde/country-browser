import { useState, useCallback, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const options = [
	{ id: 0, name: 'Filter by Region', value: 'all' },
	{ id: 1, name: 'Africa', value: 'africa' },
	{ id: 2, name: 'America', value: 'america' },
	{ id: 3, name: 'Asia', value: 'asia' },
	{ id: 4, name: 'Europe', value: 'europe' },
	{ id: 5, name: 'Oceania', value: 'oceania' },
]

export default function Filter() {
	const [selected, setSelected] = useState(options[0])

	const onChange = useCallback((selected) => {
		if (selected.id !== 0) options[0].name = 'All'
		else options[0].name = 'Filter by Region'
		setSelected(selected)
	})

	return (
		<div className="w-48 text-white/70 text-sm relative">
			<Listbox value={selected} onChange={onChange}>
				<Listbox.Button className="focus:ring-1 ring-offset-slate-900 ring-offset-1 focus:ring-blue-500/60 focus:outline-none focus:bg-slate-800/70 w-full hover:bg-slate-800/70 bg-slate-800 flex py-2 px-4 justify-between flex-nowrap rounded-sm items-center">
					<span className="mr-6">{selected.name}</span>
					<div className="w-4 flex items-center justify-center">
						<ChevronDownIcon className="w-full" />
					</div>
				</Listbox.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<Listbox.Options className="bg-slate-800  focus:outline-none px-2 py-1 w-full mt-1 absolute top-full">
						{options
							.filter((option) => option !== selected)
							.map((option, i) => (
								<Listbox.Option as={Fragment} key={i} value={option}>
									{({ active }) => (
										<span
											className={`block py-1 px-2 rounded-sm hover:bg-slate-900/70  cursor-pointer transition ${
												active ? 'bg-slate-900/70' : ''
											}`}
										>
											{option.name}
										</span>
									)}
								</Listbox.Option>
							))}
					</Listbox.Options>
				</Transition>
			</Listbox>
		</div>
	)
}
