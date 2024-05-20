import { derived, writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export function setCtx() {
	const value = writable<string | undefined>();
	const disabled = writable(false);

	const isSelected = (item: string, v?: string) => item === v;

	const isSelectedStore = derived(value, ($value) => (item: string) => {
		return isSelected(item, $value);
	});

	const handleValueChange = (newValue: string) => {
		value.set(newValue);
	};

	const trigger = derived([value, disabled], ([$value, $disabled]) => {
		const fn = (props: { value: string; disabled: boolean }) => {
			return {
				disabled: $disabled || props.disabled,
				'data-value': props.value,
				'data-state': isSelected(props.value, $value) ? 'true' : 'false'
			};
		};

		fn.action = (node: HTMLElement) => {
			const handler = () => {
				const disabled = node.dataset.disabled === 'true';
				const itemValue = node.dataset.value;
				if (disabled || !itemValue) return;

				handleValueChange(itemValue);
			};

			node.addEventListener('click', handler);

			return {
				destroy: () => {
					node.removeEventListener('click', handler);
				}
			};
		};

		return fn;
	});

	const returned = {
		elements: { trigger },
		value,
		disabled,
		isSelected: isSelectedStore
	};

	setContext('action', returned);

	return returned;
}

export function getCtx() {
	return getContext<ReturnType<typeof setCtx>>('action');
}

export function setItem(props: { disabled: boolean; value: string }) {
	setContext('item', { ...props });
	return { ...props };
}

export function getItemProps() {
	return getContext<ReturnType<typeof setItem>>('item');
}

export function getTrigger() {
	const ctx = getCtx();
	const { disabled, value } = getItemProps();
	return {
		...ctx,
		props: { disabled, value }
	};
}

export function getContent() {
	const ctx = getCtx();
	const { value } = getItemProps();
	return {
		...ctx,
		props: value
	};
}
