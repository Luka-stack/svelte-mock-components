<script lang="ts">
	import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '$lib/test/index.js';

	const items = [
		{
			title: 'Title 1',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			title: 'Title 2',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			title: 'Title 3',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		}
	];

	let value: string | undefined = undefined;
</script>

<button
	class="p-4 bg-red-950"
	on:click={() => {
		if (value === 'Title 1') {
			value = 'Title 2';
		} else if (value === 'Title 2') {
			value = 'Title 3';
		} else if (value === 'Title 3') {
			value = 'Title 1';
		} else {
			value = 'Title 1';
		}
	}}
>
	Update
</button>

<main class="flex items-center justify-center h-screen">
	<div class="w-1/2">
		<Accordion {value} class="p-4 border rounded-md border-slate-600">
			{#each items as { title, content }, i}
				<AccordionItem value={title}>
					<AccordionTrigger on:click={() => console.log('Haro')}>
						{title}
					</AccordionTrigger>
					<AccordionContent>
						{content}
					</AccordionContent>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</main>
