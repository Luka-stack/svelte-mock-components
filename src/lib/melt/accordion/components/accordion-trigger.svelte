<script lang="ts">
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { getTrigger } from '../context.js';
	import type { AccordionTriggerProps } from '../types.js';

	// TODO Adde events
	type $$Props = AccordionTriggerProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const {
		elements: { trigger },
		props
	} = getTrigger();
</script>

<button
	bind:this={el}
	use:melt={$trigger(props)}
	type="button"
	class={cn(
		'flex items-center justify-between flex-1 w-full py-3 font-meidum [&[data-state=open]>span>svg]:-rotate-180',
		className
	)}
	{...$$restProps}
>
	<slot />

	<span
		class="inline-flex items-center justify-center bg-transparent rounded-md size-8 hover:bg-slate-800/50"
	>
		<ChevronDown class="transition-transform duration-200 text-slate-400 size-5" />
	</span>
</button>
