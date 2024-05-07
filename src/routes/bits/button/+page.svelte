<script lang="ts">
	import Button from '$lib/bits/button/Button.svelte';

	let el: any;

	$: console.log('el', el);
</script>

<Button on:click={() => alert('Clicked')} bind:el>Test</Button>
