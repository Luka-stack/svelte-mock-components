<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getCtx, getItemCtx } from './ctx.js';
	import { cn } from '$lib/utils.js';
	import { slide } from 'svelte/transition';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		el?: HTMLDivElement;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const { isSelected } = getCtx();
	const { value } = getItemCtx();
</script>

{#if $isSelected(value)}
	<div bind:this={el} class={cn('pb-6 text-sm', className)} {...$$restProps} transition:slide>
		<slot />
	</div>
{/if}
