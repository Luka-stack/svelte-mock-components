<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { type Props, buttonVariants, type Events } from '../types.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let el: $$Props['el'] = undefined;
	export let size: $$Props['size'] = 'default';
	export let variant: $$Props['variant'] = 'default';

	export { className as class };
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	bind:this={el}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</button>
