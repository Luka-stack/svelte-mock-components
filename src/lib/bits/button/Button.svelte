<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from './types.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';

	export { className as class };
</script>

<Button.Root
	class={cn(buttonVariants({ variant, size, className }))}
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</Button.Root>
