<script lang="ts">
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { setCtx } from '../context.js';
	import { arraysAreEqual } from '$lib/internal/arrays.js';
	import type { AccordionProps } from '../types.js';

	type Multiple = $$Generic<boolean>;
	type $$Props = AccordionProps<Multiple>;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let disabled: $$Props['disabled'] = false;
	export let multiple: $$Props['multiple'] = false as Multiple;
	export let onValueChange: $$Props['onValueChange'] = undefined;

	const {
		elements: { root },
		states: { value: accordionValue },
		updateOptions
	} = setCtx({
		multiple,
		defaultValue: value,
		disabled,
		onValueChange({ next }: { next: $$Props['value'] }) {
			if (Array.isArray(next)) {
				if (!Array.isArray(value) || !arraysAreEqual(value, next)) {
					value = next;
					onValueChange?.(next);
				}

				return next;
			}

			if (value !== next) {
				value = next;
				onValueChange?.(next);
			}

			return next;
		}
	});

	$: value !== undefined && accordionValue.set(Array.isArray(value) ? [...value] : (value as any));

	$: updateOptions('disabled', disabled);
</script>

<div bind:this={el} use:melt={$root} class={cn('w-full', className)} {...$$restProps}>
	<slot />
</div>
