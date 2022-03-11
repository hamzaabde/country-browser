export function toTitleCase(str) {
	return [str[0].toUpperCase(), ...str.toLowerCase().split('').slice(1)].join(
		''
	)
}

export function toLowerCase(str) {
	return `${str}`.toLowerCase()
}
