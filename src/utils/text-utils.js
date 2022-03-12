export function toTitleCase(str) {
	if (!str) return str

	return [str[0].toUpperCase(), ...str.toLowerCase().split('').slice(1)].join(
		''
	)
}

export function toLowerCase(str) {
	if (!str) return str

	return `${str}`.toLowerCase()
}
