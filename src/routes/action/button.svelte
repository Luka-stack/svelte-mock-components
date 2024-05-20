<script lang="ts">
	import { getTrigger } from '$lib/actions.js';

	const {
		props,
		value,
		elements: { trigger }
	} = getTrigger();

	$: builder = $trigger(props);
</script>

<button class="w-full p-2 rounded-md bg-red-950" use:$trigger.action {...builder}>
	<slot />
</button>
