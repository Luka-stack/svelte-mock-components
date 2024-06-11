<script lang="ts">
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { getCtx } from '../context.js';
	import type { DialogTitleProps } from '../types.js';

	type $$Props = DialogTitleProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let level: $$Props['level'] = 'h2';
	export let el: $$Props['el'] = undefined;

	const {
		elements: { title }
	} = getCtx();
</script>

<svelte:element
	this={level}
	bind:this={el}
	use:melt={$title}
	class={cn('text-lg font-semibold tracking-tight leading-none', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
