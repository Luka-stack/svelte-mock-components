import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import type { ChangeFn } from '$lib/internal/overridable.js';
import type { ForwardEvents, OnChangeFn, WhenTrue } from '$lib/internal/types.js';

type AccordionValue<Multiple extends boolean> = WhenTrue<Multiple, string[], string>;

export type Accordion<Multiple extends boolean = false> = {
	multiple?: Multiple;
	disabled?: boolean;
	value?: AccordionValue<Multiple>;
	onValueChange?: ChangeFn<AccordionValue<Multiple> | undefined>;
};

export type AccordionProps<Multiple extends boolean> = {
	el?: HTMLDivElement;
	multiple?: Multiple;
	disabled?: boolean;
	value?: AccordionValue<Multiple>;
	onValueChange?: OnChangeFn<AccordionValue<Multiple> | undefined>;
} & HTMLAttributes<HTMLDivElement> &
	ForwardEvents;

export type AccordionItem = {
	value: string;
	disabled?: boolean;
};

export type AccordionItemProps = {
	value: string;
	disabled?: boolean;
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement> &
	ForwardEvents;

export type AccordionContentProps = {
	el?: HTMLDivElement;
} & HTMLAttributes<HTMLDivElement> &
	ForwardEvents;

export type AccordionTriggerProps = {
	el?: HTMLButtonElement;
} & HTMLButtonAttributes &
	ForwardEvents;
