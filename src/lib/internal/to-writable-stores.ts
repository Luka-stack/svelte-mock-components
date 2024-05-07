import { writable, type Writable } from 'svelte/store';

export function toWritableStores<T extends Record<string, unknown>>(properties: T) {
	const result = {} as { [K in keyof T]: Writable<T[K]> };

	Object.keys(properties).forEach((key) => {
		const propertyKey = key as keyof T;
		const value = properties[propertyKey];
		result[propertyKey] = writable(value) as Writable<T[typeof propertyKey]>;
	});

	return result;
}
