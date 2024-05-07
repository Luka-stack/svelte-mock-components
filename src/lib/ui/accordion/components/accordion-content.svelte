<script lang="ts">
	import { slide } from 'svelte/transition';

	import { cn } from '$lib/utils.js';
	import { getContent } from '../ctx.js';
	import { eventForwarder } from '$lib/internal/event-forwarder.js';
	import type { AccordionContentProps } from '../types.js';

	type $$Props = AccordionContentProps;
	type $$Events = {};

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let el: $$Props['el'] = undefined;

	const {
		helpers: { isSelected },
		props: { value }
	} = getContent();
</script>

{#if $isSelected(value)}
	<div
		bind:this={el}
		transition:slide
		use:eventForwarder={$$restProps}
		class={cn('pb-6 text-sm', className)}
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
