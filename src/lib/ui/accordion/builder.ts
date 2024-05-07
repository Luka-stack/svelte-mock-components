import { derived, writable } from 'svelte/store';

import { omit } from '$lib/internal/object.js';
import { toWritableStores } from '$lib/internal/to-writable-stores.js';
import { overridable, type ChangeFn } from '$lib/internal/overridable.js';
import type { Accordion, AccordionItem } from './types.js';

const defaults = {
	multiple: false,
	disabled: false
} satisfies Accordion;

export function buildAccordion<Multiple extends boolean>(props: Accordion<Multiple>) {
	const withDefaults = { ...defaults, ...props };

	const options = toWritableStores(omit(withDefaults, 'value', 'onValueChange'));

	const valueWritable = writable(props.value);
	const value = overridable<string | string[] | undefined>(
		valueWritable,
		props.onValueChange as ChangeFn<string | string[] | undefined>
	);

	const select = (itemValue: string) => {
		value.update(($value) => {
			if ($value === undefined) {
				return props.multiple ? [itemValue] : itemValue;
			}

			if (Array.isArray($value)) {
				return $value.includes(itemValue)
					? $value.filter((i) => i !== itemValue)
					: [...$value, itemValue];
			}

			return $value === itemValue ? undefined : itemValue;
		});
	};

	const isSelectedStore = derived(value, ($value) => (valueItem: string) => {
		if ($value === undefined) {
			return false;
		}

		if (Array.isArray($value)) {
			return $value.includes(valueItem);
		}

		return $value === valueItem;
	});

	return {
		options,
		states: {
			value
		},
		helpers: {
			select,
			isSelected: isSelectedStore
		}
	};
}

export function buildAccordionItem(props: AccordionItem) {
	const options = toWritableStores({ disabled: props.disabled });

	return {
		props: {
			value: props.value
		},
		options
	};
}
