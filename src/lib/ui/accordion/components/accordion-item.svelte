<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { setItem } from '../ctx.js';
	import { eventForwarder } from '$lib/internal/event-forwarder.js';
	import type { AccordionItemProps } from '../types.js';

	type $$Props = AccordionItemProps;
	type $$Events = {};

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let el: $$Props['el'] = undefined;
	export let value: $$Props['value'];
	export let disabled: $$Props['disabled'] = undefined;

	const { updateOptions } = setItem({ value, disabled });

	$: updateOptions('disabled', disabled);
</script>

<div
	bind:this={el}
	use:eventForwarder={$$restProps}
	class={cn('border-b border-slate-700 px-1.5', className)}
	{...$$restProps}
>
	<slot />
</div>
