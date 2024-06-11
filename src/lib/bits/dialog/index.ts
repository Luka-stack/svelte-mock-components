import { Dialog as DialogPrimitive } from 'bits-ui';

import Content from './dialog-content.svelte';
import Trigger from './dialog-trigger.svelte';
import Header from './dialog-header.svelte';
import Title from './dialog-title.svelte';
import Description from './dialog-description.svelte';
import Close from './dialog-close.svelte';

const Root = DialogPrimitive.Root;

export {
	Root as Dialog,
	Content as DialogContent,
	Trigger as DialogTrigger,
	Header as DialogHeader,
	Title as DialogTitle,
	Description as DialogDescription,
	Close as DialogClose
};
