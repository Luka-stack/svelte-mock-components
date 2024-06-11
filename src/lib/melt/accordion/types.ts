import type { HTMLButtonAttributes } from 'svelte/elements';
import type {
	CreateAccordionProps as MeltAccordionProps,
	AccordionItemProps as MeltAccordionItemProps
} from '@melt-ui/svelte';

import type { DOMElement, DivAttributes, ObjectOnly, OnChangeFn } from '$lib/internal/types.js';

type OmitValue<T> = Omit<T, 'value' | 'defaultValue' | 'onValueChange'>;
type OmitForceVisible<T> = Omit<T, 'forceVisible'>;

export type AccordionProps<Multiple extends boolean> = OmitValue<
	OmitForceVisible<MeltAccordionProps<Multiple>>
> & {
	value?: MeltAccordionProps<Multiple>['defaultValue'];
	onValueChange?: OnChangeFn<MeltAccordionProps<Multiple>['defaultValue']>;
} & DivAttributes &
	DOMElement;

export type AccordionItemProps = ObjectOnly<MeltAccordionItemProps> & DivAttributes & DOMElement;

export type AccordionTriggerProps = HTMLButtonAttributes & DOMElement<HTMLButtonElement>;

export type AccordionContentProps = DivAttributes & DOMElement;
