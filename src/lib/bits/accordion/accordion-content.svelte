<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	import { cn } from '$lib/utils.js';

	type $$Props = AccordionPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AccordionPrimitive.Content
	transition={slide}
	class={cn('pb-6 text-sm', className)}
	{...$$restProps}
>
	<slot />
</AccordionPrimitive.Content>
