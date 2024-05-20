<script lang="ts">
	import Root from './root.svelte';
	import Item from './item.svelte';
	import Content from './content.svelte';
	import Button from './button.svelte';
</script>

<main class="text-slate-200">
	<Root>
		<Item value="value-1">
			<Button>Value 1 Trigger</Button>
			<Content>Value 1 Content</Content>
		</Item>

		<Item value="value-2">
			<Button>Value 1 Trigger</Button>
			<Content>Value 1 Content</Content>
		</Item>
	</Root>
</main>
