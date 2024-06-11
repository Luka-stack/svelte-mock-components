<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	import { cn } from '$lib/utils.js';

	type $$Props = DialogPrimitive.CloseProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Close
	class={cn(
		'inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-medium leading-none text-black shadow hover:opacity-75',
		className
	)}
	{...$$restProps}
>
	<slot />
</DialogPrimitive.Close>
