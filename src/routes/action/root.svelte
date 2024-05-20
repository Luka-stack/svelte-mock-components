<script lang="ts">
	import { setCtx } from '$lib/actions.js';

	export let disabled: boolean = false;

	const { disabled: disabledStore } = setCtx();

	$: disabledStore.set(disabled);
</script>

<div class="grid gap-10 p-4 border rounded-md">
	<slot />
</div>
