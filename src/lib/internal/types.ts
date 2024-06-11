import type { HTMLAttributes } from 'svelte/elements';

export type WhenTrue<TrueOrFalse, IfTrue, IfFalse, IfNeither = IfTrue | IfFalse> = [
	TrueOrFalse
] extends [true]
	? IfTrue
	: [TrueOrFalse] extends [false]
		? IfFalse
		: IfNeither;

export type OnChangeFn<T> = (value: T) => void;

export type ValueOf<T> = T[keyof T];

export type ObjectOnly<T> = T extends object ? T : never;

export type DivAttributes = HTMLAttributes<HTMLDivElement>;

export type DOMElement<T extends Element = HTMLDivElement> = {
	el?: T;
};

export type ForwardEvents = {
	['on-click']?: (e: MouseEvent) => void;
	['on-mouseenter']?: (e: MouseEvent) => void;
	['on-mouseleave']?: (e: MouseEvent) => void;
	['on-mousedown']?: (e: MouseEvent) => void;
	['on-mouseup']?: (e: MouseEvent) => void;
	['on-keydown']?: (e: KeyboardEvent) => void;
	['on-keyup']?: (e: KeyboardEvent) => void;
	['on-focus']?: (e: FocusEvent) => void;
};
