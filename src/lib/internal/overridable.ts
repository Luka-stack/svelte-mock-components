import type { Updater, Writable } from 'svelte/store';

export type ChangeFn<T> = (args: { curr: T; next: T }) => T;

export function overridable<T>(store: Writable<T>, onChange?: ChangeFn<T>) {
	const update = (updater: Updater<T>) => {
		store.update((curr) => {
			const next = updater(curr);
			let res: T = next;

			if (onChange) {
				res = onChange({ curr, next });
			}

			return res;
		});
	};

	const set: typeof store.set = (curr) => {
		update(() => curr);
	};

	return {
		...store,
		update,
		set
	};
}
