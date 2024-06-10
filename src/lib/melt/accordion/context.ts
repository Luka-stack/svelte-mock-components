import { getOptionUpdater } from '$lib/internal/updater.js';
import { createAccordion, type CreateAccordionProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';
import type { AccordionItemProps } from './types.js';

const PARTS = {
	ROOT: 'accordion',
	ITEM: 'accordion-item'
} as const;

export function setCtx<Multiple extends boolean>(props: CreateAccordionProps<Multiple>) {
	const meltAccordion = createAccordion(props);
	const accordion = {
		...meltAccordion,
		updateOptions: getOptionUpdater(meltAccordion.options)
	};

	setContext(PARTS.ROOT, accordion);
	return accordion;
}

export function getCtx() {
	return getContext<ReturnType<typeof setCtx>>(PARTS.ROOT);
}

export function setItem(props: AccordionItemProps) {
	setContext(PARTS.ITEM, { ...props });

	const context = getCtx();
	return { ...context, props };
}

export function getItemProps() {
	return getContext<AccordionItemProps>(PARTS.ITEM);
}

export function getTrigger() {
	const ctx = getCtx();
	const { value, disabled } = getItemProps();

	return {
		...ctx,
		props: { value, disabled }
	};
}

export function getContent() {
	const ctx = getCtx();
	const { value: props } = getItemProps();

	return {
		...ctx,
		props
	};
}
