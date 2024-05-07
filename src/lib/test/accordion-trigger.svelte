<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { getCtx, getItemCtx } from './ctx.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLButtonAttributes & {
		el?: HTMLButtonElement;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let disabled: $$Props['disabled'] = false;
	export let el: $$Props['el'] = undefined;

	const {
		select,
		options: { disabled: ctxDisabled }
	} = getCtx();
	const { value } = getItemCtx();
</script>

<button
	bind:this={el}
	class={cn('flex w-full py-2', className)}
	on:click={() => select(value)}
	on:click
	disabled={disabled || $ctxDisabled}
	{...$$restProps}
>
	<slot />
</button>
