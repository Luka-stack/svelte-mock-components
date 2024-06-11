<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { DialogHeaderProps } from '../types.js';

	type $$Props = DialogHeaderProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;
</script>

<div bind:this={el} class={cn('grid gap-1.5 text-left text-white', className)} {...$$restProps}>
	<slot />
</div>
