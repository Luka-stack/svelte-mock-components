<script lang="ts">
	import X from 'lucide-svelte/icons/x';
	import { melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	import { cn } from '$lib/utils.js';
	import { getCtx } from '../context.js';
	import { flyAndScale } from '$lib/internal/transitions.js';
	import type { DialogContentProps } from '../types.js';

	type $$Props = DialogContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let el: $$Props['el'] = undefined;

	const {
		states: { open },
		elements: { portalled, overlay, content, close }
	} = getCtx();
</script>

<!-- Portal -->
<div use:melt={$portalled}>
	{#if $open}
		<!-- Overlay -->
		<div
			use:melt={$overlay}
			transition:fade={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>

		<!-- Content -->
		<div
			bind:this={el}
			use:melt={$content}
			transition:flyAndScale={{
				duration: 150,
				y: 25,
				start: 0.9
			}}
			class={cn(
				'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] border border-white/30 p-6 shadow-lg rounded-md grid gap-4',
				className
			)}
			{...$$restProps}
		>
			<slot />

			<!-- 'X' button -->
			<button
				use:melt={$close}
				class="absolute inline-flex items-center justify-center w-6 h-6 p-1 rounded-full appearance-none text-slate-400 right-4 top-4 hover:bg-white/10"
			>
				<X class="size-4" />
			</button>
		</div>
	{/if}
</div>
