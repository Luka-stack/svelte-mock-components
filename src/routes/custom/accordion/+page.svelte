<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		AccordionContent,
		AccordionTrigger
	} from '$lib/ui/accordion/index.js';
</script>

<main class="container mx-auto space-y-10 text-slate-300">
	<header class="w-full p-4 border rounded-md">
		<h1 class="text-xl font-bold">Header</h1>
	</header>

	<div class="flex w-full p-4 border rounded-md">
		<section class="w-1/2">
			<h3 class="mb-5 text-lg">Some Content Header</h3>
			<p>Content</p>
		</section>

		<section class="w-1/2">
			<Accordion class="p-4 border rounded-md">
				<AccordionItem value="item-1">
					<AccordionTrigger>What is the meaning of life?</AccordionTrigger>
					<AccordionContent>
						To become a better person, to help others, and to leave the world a better place than
						you found it.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>How do I become a better person?</AccordionTrigger>
					<AccordionContent>
						Read books, listen to podcasts, and surround yourself with people who inspire you.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>What is the best way to help others?</AccordionTrigger>
					<AccordionContent>Give them your time, attention, and love.</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	</div>
</main>
