import { getContext, setContext } from 'svelte';

import { getOptionUpdater } from '$lib/internal/updater.js';
import type { Accordion, AccordionItem } from './types.js';
import { buildAccordion, buildAccordionItem } from './builder.js';

const PARTS = {
	ROOT: 'accordion',
	ITEM: 'accordion-item'
} as const;

export function setCtx<Multiple extends boolean>(props: Accordion<Multiple>) {
	const accordion = buildAccordion(props);

	const accordionCtx = {
		...accordion,
		updateOptions: getOptionUpdater(accordion.options)
	};

	setContext(PARTS.ROOT, accordionCtx);

	return accordionCtx;
}

export function getCtx() {
	return getContext<ReturnType<typeof setCtx>>(PARTS.ROOT);
}

export function setItem(props: AccordionItem) {
	const item = buildAccordionItem(props);

	const itemCtx = {
		...item,
		updateOptions: getOptionUpdater(item.options)
	};

	setContext(PARTS.ITEM, itemCtx);

	return itemCtx;
}

export function getItemProps() {
	return getContext<ReturnType<typeof setItem>>(PARTS.ITEM);
}

export function getContent() {
	const { helpers } = getCtx();
	const { props } = getItemProps();
	return {
		helpers,
		props
	};
}

export function getTrigger() {
	const { helpers, options: accordionOptions } = getCtx();
	const { props, options: itemOptions } = getItemProps();

	return {
		props,
		itemOptions,
		accordionOptions,
		helpers: helpers
	};
}
