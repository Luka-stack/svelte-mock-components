<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	import { cn } from '$lib/utils.js';
	import { getContent } from '../context.js';
	import type { AccordionContentProps } from '../types.js';

	type $$Props = AccordionContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const {
		elements: { content },
		helpers: { isSelected },
		props
	} = getContent();
</script>

{#if $isSelected(props)}
	<div
		bind:this={el}
		use:melt={$content(props)}
		transition:slide
		class={cn('pb-6 text-sm', className)}
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
