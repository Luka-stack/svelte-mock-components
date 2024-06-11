<script lang="ts">
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { getCtx } from '../context.js';
	import type { DialogDescriptionProps } from '../types.js';

	type $$Props = DialogDescriptionProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const {
		elements: { description }
	} = getCtx();
</script>

<div
	bind:this={el}
	class={cn('text-sm text-gray-400', className)}
	use:melt={$description}
	{...$$restProps}
>
	<slot />
</div>
