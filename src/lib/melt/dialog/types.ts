import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { CreateDialogProps as MeltDialogProps } from '@melt-ui/svelte';

import type { DOMElement, DivAttributes, OnChangeFn } from '$lib/internal/types.js';

type OmitOpen<T> = Omit<T, 'open' | 'defaultOpen' | 'onOpenChange'>;

export type DialogProps = OmitOpen<Omit<MeltDialogProps, 'role' | 'ids' | 'forceVisible'>> & {
	open?: MeltDialogProps['defaultOpen'];
	onOpenChange?: OnChangeFn<boolean>;
};

export type DialogContentProps = DivAttributes & DOMElement;

export type DialogTriggerProps = HTMLButtonAttributes & DOMElement<HTMLButtonElement>;

export type DialogHeaderProps = DivAttributes & DOMElement;

export type DialogDescriptionProps = DivAttributes & DOMElement;

export type DialogCloseProps = HTMLButtonAttributes & DOMElement<HTMLButtonElement>;

export type DialogTitleProps = {
	level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement> &
	DOMElement<HTMLHeadingElement>;
