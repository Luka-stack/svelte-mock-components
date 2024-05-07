<script lang="ts">
	import { arraysAreEqual } from '$lib/internal/arrays.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { setCtx } from './ctx.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		el?: HTMLDivElement;
		disabled?: boolean;
		multiple?: boolean;
		value?: string | string[];
		onValueChange?: (next: string | string[] | undefined) => void;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;
	export let multiple: $$Props['multiple'] = false as boolean;
	export let disabled: $$Props['disabled'] = false;
	export let value: $$Props['value'] = undefined;
	export let onValueChange: $$Props['onValueChange'] = undefined;

	const { updateOptions, updateValue } = setCtx({
		multiple,
		value,
		disabled,
		onValueChange(next: string | string[] | undefined) {
			if (Array.isArray(next)) {
				if (!Array.isArray(value) || !arraysAreEqual(value, next)) {
					onValueChange?.(next);
					value = next;
				}
			} else if (value !== next) {
				onValueChange?.(next);
				value = next;
			}
		}
	});

	$: updateValue(value);
	$: updateOptions('disabled', disabled);
</script>

<div bind:this={el} class={cn('text-slate-200', className)} {...$$restProps}>
	<slot />
</div>
