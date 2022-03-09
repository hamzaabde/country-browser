import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'

const options = [
	{ id: 0, name: 'Filter by Region', value: 'all' },
	{ id: 1, name: 'Africa', value: 'africa' },
	{ id: 2, name: 'America', value: 'america' },
	{ id: 3, name: 'Asia', value: 'asia' },
	{ id: 4, name: 'Europe', value: 'europe' },
	{ id: 5, name: 'Oceania', value: 'oceania' },
]

export default function FilterMenu() {
	const [selected, setSelected] = useState(options[0])

	return (
		<Listbox
			as="div"
			className="relative xs:mt-3 sm:mt-0"
			value={selected}
			onChange={(selected) => {
				switch (options[0].id === selected.id) {
					case true:
						options[0].name = 'Filter by Region'
						break
					default:
						options[0].name = 'All'
				}

				setSelected(selected)
			}}
		>
			<Listbox.Button className="flex focus:outline-[1px] focus:outline-dotted focus:outline-blue-400  items-center justify-between flex-nowrap bg-white shadow-md rounded-md xs:p-4 p-2 w-48 text-xs xs:text-sm text-light-input/70">
				{({ open }) => (
					<>
						<span className="">{selected.name}</span>
						{open ? (
							<ChevronUpIcon className="w-5" />
						) : (
							<ChevronDownIcon className="w-5" />
						)}
					</>
				)}
			</Listbox.Button>
			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Listbox.Options className="outline-none focus-within:outline-[1px] focus-within:outline-dotted focus-within:outline-blue-400 absolute mt-2 top-full w-48 bg-white shadow-md rounded-md xs:p-2 p-1 items-start">
					{options
						.filter(({ id }) => id !== selected.id)
						.map((person) => (
							<Listbox.Option as={Fragment} key={person.id} value={person}>
								{({ active }) => (
									<button
										className={`block w-full transition xs:px-2 text-left xs:py-1 px-1 py-0.5 cursor-pointer rounded-md hover:bg-black/5 text-xs  ${
											active ? 'bg-black/5' : null
										}`}
									>
										{person.name}
									</button>
								)}
							</Listbox.Option>
						))}
				</Listbox.Options>
			</Transition>
		</Listbox>
	)
}
