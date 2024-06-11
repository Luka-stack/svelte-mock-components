<script lang="ts">
	import {
		Dialog,
		DialogTrigger,
		DialogContent,
		DialogClose,
		DialogDescription,
		DialogHeader,
		DialogTitle
	} from '$lib/bits/dialog/index.js';
</script>

<main class="container mx-auto space-y-10 text-slate-300">
	<header class="w-full p-4 border rounded-md">
		<h1 class="text-xl font-bold">Dialog</h1>
	</header>

	<div class="w-full p-4 border rounded-md">
		<Dialog>
			<DialogTrigger>Open Dialog</DialogTrigger>

			<DialogContent class="max-w-[450px] w-[90vw]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription
						>Make changes to your profile here. Click save when you're done.</DialogDescription
					>
				</DialogHeader>

				<fieldset class="flex items-center gap-5 mb-4">
					<label class="w-[90px] text-right text-white" for="name"> Name </label>
					<input
						class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
						id="name"
						value="Thomas G. Lopes"
					/>
				</fieldset>
				<fieldset class="flex items-center gap-5 mb-4">
					<label class="w-[90px] text-right text-white" for="username"> Username </label>
					<input
						class="inline-flex items-center justify-center flex-1 w-full h-8 px-3 leading-none text-black border border-solid rounded-sm"
						id="username"
						value="@thomasglopes"
					/>
				</fieldset>

				<div class="flex justify-end space-x-4">
					<DialogClose>Close dialog</DialogClose>
					<DialogClose class="text-white bg-transparent border border-white"
						>Save changes</DialogClose
					>
				</div>
			</DialogContent>
		</Dialog>
	</div>
</main>
