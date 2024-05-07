<script lang="ts">
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	import { cn } from '$lib/utils.js';
	import { getTrigger } from '../ctx.js';
	import type { AccordionTriggerProps } from '../types.js';
	import { eventForwarder } from '$lib/internal/event-forwarder.js';

	type $$Props = AccordionTriggerProps;
	type $$Events = {};

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let el: $$Props['el'] = undefined;
	export let disabled: $$Props['disabled'] = undefined;
	const {
		props: { value },
		helpers: { isSelected, select },
		accordionOptions: { disabled: accordionDisabled },
		itemOptions: { disabled: itemDisabled }
	} = getTrigger();

	let isDisabled = disabled || $accordionDisabled || $itemDisabled;
</script>

<button
	bind:this={el}
	use:eventForwarder={$$restProps}
	on:click={() => select(value)}
	disabled={isDisabled}
	data-state={$isSelected(value) ? 'open' : 'closed'}
	class={cn(
		'flex items-center justify-between flex-1 w-full py-3 font-medium [&[data-state=open]>span>svg]:-rotate-180',
		className
	)}
	{...$$restProps}
>
	<slot />

	<span
		class="inline-flex items-center justify-center bg-transparent rounded-md size-8 hover:bg-slate-800/50"
	>
		<ChevronDown class="transition-transform duration-200 text-slate-400 size-5" />
	</span>
</button>
