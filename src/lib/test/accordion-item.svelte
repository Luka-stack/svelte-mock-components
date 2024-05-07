<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { setItemCtx } from './ctx.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		el?: HTMLDivElement;
		value: string;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;
	export let value: $$Props['value'];

	setItemCtx({ value });
</script>

<div bind:this={el} class={cn('px-1.5 border-b border-slate-700', className)} {...$$restProps}>
	<slot />
</div>
