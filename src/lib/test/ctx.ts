import { getContext, setContext } from 'svelte';
import { derived, writable, type StoresValues, type Updater, type Writable } from 'svelte/store';

const ACCORDION = 'accordion';
const ACCORDION_ITEM = 'accordion-item';

type Accordion = {
	disabled?: boolean;
	multiple?: boolean;
	onValueChange: (next: string | string[] | undefined) => void;
	value?: string | string[];
};

type AccordionItem = {
	value: string;
};

type AccordionItemContext = {
	value: string;
};

export function setCtx(props: Accordion) {
	const { multiple, disabled, value, onValueChange } = props;

	const options = {
		multiple: writable(multiple),
		disabled: writable(disabled)
	};

	const selected = overridable<string[] | string | undefined>(value, onValueChange);

	const accordion = {
		selected,
		options,
		isSelected: derived(selected, ($selected) => (id: string) => {
			if ($selected === undefined) {
				return false;
			}

			if (Array.isArray($selected)) {
				return $selected.includes(id);
			}

			return $selected === id;
		}),
		select: (id: string) => {
			selected.update((prev) => {
				if (prev === undefined) {
					return multiple ? [id] : id;
				}

				if (Array.isArray(prev)) {
					return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
				}

				return prev === id ? undefined : id;
			});
		}
	};

	setContext(ACCORDION, accordion);

	return {
		...accordion,
		updateOptions: updater(options),
		updateValue: (value: string | string[] | undefined) =>
			selected.set(Array.isArray(value) ? [...value] : value)
	};
}

export function getCtx() {
	return getContext<ReturnType<typeof setCtx>>(ACCORDION);
}

export function setItemCtx(props: AccordionItem) {
	const item = {
		value: props.value
	};

	setContext(ACCORDION_ITEM, item);
}

export function getItemCtx() {
	return getContext<AccordionItemContext>(ACCORDION_ITEM);
}

function overridable<T>(value: T, onChange: (next: T) => void) {
	const store = writable(value);

	const update = (updater: Updater<T>) => {
		store.update((curr) => {
			const next = updater(curr);
			onChange(next);
			return next;
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

function updater(options: Record<string, Writable<unknown>>) {
	return function <
		K extends keyof typeof options,
		V extends StoresValues<(typeof options)[keyof typeof options]>
	>(key: K, value: V | undefined) {
		if (value === undefined) {
			return;
		}

		const store = options[key];
		if (store) {
			store.set(value);
		}
	};
}
