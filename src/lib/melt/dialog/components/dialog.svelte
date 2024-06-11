<script lang="ts">
	import { setCtx } from '../context.js';
	import type { DialogProps } from '../types.js';

	type $$Props = DialogProps;

	export let open: $$Props['open'] = undefined;
	export let preventScroll: $$Props['preventScroll'] = true;
	export let closeOnOutsideClick: $$Props['closeOnOutsideClick'] = true;
	export let onOpenChange: $$Props['onOpenChange'] = undefined;
	export let onOutsideClick: $$Props['onOutsideClick'] = undefined;

	const {
		states: { open: ctxOpen },
		updateOptions
	} = setCtx({
		defaultOpen: open,
		preventScroll,
		closeOnOutsideClick,
		onOutsideClick,
		onOpenChange({ next }) {
			if (open !== next) {
				open = next;
				onOpenChange?.(next);
			}

			return next;
		}
	});

	$: open !== undefined && ctxOpen.set(open);

	$: updateOptions('preventScroll', preventScroll);
	$: updateOptions('closeOnOutsideClick', closeOnOutsideClick);
</script>

<slot />
