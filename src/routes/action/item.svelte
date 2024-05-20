<script lang="ts">
	import { setItem } from '$lib/actions.js';

	export let value: string;
	export let disabled: boolean = false;

	setItem({ value, disabled });
</script>

<div class="grid gap-5 p-2 border rounded-md border-slate-500">
	<slot />
</div>
