<script>
	export let label;
	export let type;
	export let defaultValue;
	export let options;

	let dataOptions = [];

	$: dataOptions = options.filter((o) => o.includes(defaultValue)).slice(0, 5);

	const name = label.toLowerCase();
</script>

<div class="my-2">
	<label class="block mb-2 text-md font-medium text-gray-900" for={name}>
		{label}
	</label>
	<input
		{type}
		{name}
		list={`data-${label}`}
		autocomplete="off"
		class="block px-2 py-1 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm"
		value={defaultValue || ""}
	/>
	<datalist id={`data-${label}`}>
		{#each dataOptions as option}
			<option value={option}>{option}</option>
		{/each}
	</datalist>
</div>

<style>
	input:focus {
		border: 2px solid #3b83f6a6;
		outline: none;
	}
</style>
