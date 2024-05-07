<script lang="ts">
	export let btn: HTMLButtonElement;

	$: console.log(btn);
</script>

<button bind:this={btn} class="text-red-500" on:click={() => alert('test')}>HTML Button</button>
