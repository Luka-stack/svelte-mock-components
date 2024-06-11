import { getOptionUpdater } from '$lib/internal/updater.js';
import { createDialog, type CreateDialogProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';

const PARTS = {
	ROOT: 'dialog'
};

export function setCtx(props: CreateDialogProps) {
	const dialog = createDialog({
		...props,
		role: 'dialog',
		forceVisible: true
	});

	setContext(PARTS.ROOT, dialog);
	return {
		...dialog,
		updateOptions: getOptionUpdater(dialog.options)
	};
}

export function getCtx() {
	return getContext<ReturnType<typeof setCtx>>(PARTS.ROOT);
}
