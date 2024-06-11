<script lang="ts">
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { getCtx } from '../context.js';
	import type { DialogCloseProps } from '../types.js';

	type $$Props = DialogCloseProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const {
		elements: { close }
	} = getCtx();
</script>

<button
	bind:this={el}
	use:melt={$close}
	type="button"
	class={cn(
		'inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-medium leading-none text-black shadow hover:opacity-75',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
