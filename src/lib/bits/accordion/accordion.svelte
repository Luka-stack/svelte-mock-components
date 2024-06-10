<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type Multiple = $$Generic<boolean>;
	type $$Props = AccordionPrimitive.Props<Multiple>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AccordionPrimitive.Root class={cn('', className)} {...$$restProps}>
	<slot />
</AccordionPrimitive.Root>
