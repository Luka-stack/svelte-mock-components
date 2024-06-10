<script lang="ts">
	import { melt } from '@melt-ui/svelte';

	import { cn } from '$lib/utils.js';
	import { setItem } from '../context.js';
	import type { AccordionItemProps } from '../types.js';

	type $$Props = AccordionItemProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;
	export let value: $$Props['value'];
	export let disabled: $$Props['disabled'] = undefined;

	const {
		elements: { item },
		props
	} = setItem({ value, disabled });
</script>

<div
	bind:this={el}
	use:melt={$item(props)}
	class={cn('border-b border-slate-700 px-1.5', className)}
	{...$$restProps}
>
	<slot />
</div>
