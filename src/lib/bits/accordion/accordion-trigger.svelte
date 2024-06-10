<script lang="ts">
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	import { cn } from '$lib/utils.js';

	type $$Props = AccordionPrimitive.TriggerProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AccordionPrimitive.Trigger
	class={cn(
		'flex items-center justify-between flex-1 w-full py-3 font-medium [&[data-state=open]>span>svg]:-rotate-180',
		className
	)}
	{...$$restProps}
>
	<slot />

	<span
		class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
	>
		<ChevronDown class="size-[18px] transition-all duration-200" />
	</span>
</AccordionPrimitive.Trigger>
