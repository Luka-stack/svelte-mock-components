<script lang="ts">
	import X from 'lucide-svelte/icons/x';
	import { fade } from 'svelte/transition';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	import { cn } from '$lib/utils.js';
	import { flyAndScale } from '$lib/internal/transitions.js';

	type $$Props = DialogPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Portal>
	<DialogPrimitive.Overlay
		transition={fade}
		transitionConfig={{ duration: 150 }}
		class="fixed inset-0 z-50 bg-black/80"
	/>

	<DialogPrimitive.Content
		transition={flyAndScale}
		class={cn(
			'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] border border-white/30 p-6 shadow-lg rounded-md grid gap-4',
			className
		)}
		{...$$restProps}
	>
		<slot />

		<DialogPrimitive.Close
			class="absolute inline-flex items-center justify-center w-6 h-6 p-1 rounded-full appearance-none text-slate-400 right-4 top-4 hover:bg-white/10"
		>
			<X class="size-4" />
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
