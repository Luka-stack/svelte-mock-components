<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { setCtx } from '../ctx.js';
	import { arraysAreEqual } from '$lib/internal/arrays.js';
	import { eventForwarder } from '$lib/internal/event-forwarder.js';
	import type { AccordionProps } from '../types.js';

	type Multiple = $$Generic<boolean>;
	type $$Props = AccordionProps<Multiple>;
	type $$Events = {};

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let el: $$Props['el'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let multiple: $$Props['multiple'] = false as Multiple;
	export let disabled: $$Props['disabled'] = false;
	export let onValueChange: $$Props['onValueChange'] = undefined;

	const {
		states: { value: store },
		updateOptions
	} = setCtx({
		multiple,
		value,
		disabled,
		onValueChange({ next }: { next: $$Props['value'] }) {
			if (Array.isArray(next)) {
				if (!Array.isArray(value) || !arraysAreEqual(value, next)) {
					onValueChange?.(next);
					value = next;
				}

				return next;
			}

			if (value !== next) {
				onValueChange?.(next);
				value = next;
			}

			return next;
		}
	});

	$: value !== undefined && store.set(Array.isArray(value) ? [...value] : value);

	$: updateOptions('disabled', disabled);
</script>

<div
	bind:this={el}
	use:eventForwarder={$$restProps}
	class={cn('w-full', className)}
	{...$$restProps}
>
	<slot />
</div>
