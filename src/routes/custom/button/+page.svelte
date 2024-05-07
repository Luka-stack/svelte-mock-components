<script lang="ts">
	import Button from '$lib/ui/button/components/Button.svelte';

	let el: HTMLButtonElement;

	$: console.log('el', el);
</script>

<div>
	<Button bind:el on:click={() => alert('Clicked')}>Custom Button</Button>
</div>
