<script>
	export let label;
	export let values;
	export let defaultValue = "";

	const name = label.toLowerCase();
</script>

<div class="my-2">
	<label class="block mb-2 text-md font-medium text-gray-900" for={name}>
		{label}
	</label>
	<select
		{name}
		bind:value={defaultValue}
		class="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm px-2 py-1"
	>
		<option value="">Select type</option>
		{#each values as val}
			<option value={val.toLowerCase()}>
				{val}
			</option>
		{/each}
	</select>
</div>

<style>
	select:focus {
		border: 2px solid #3b83f6a6;
		outline: none;
	}
</style>
