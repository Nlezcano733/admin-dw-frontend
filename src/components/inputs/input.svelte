<script>
	export let label;
	export let type;
	export let defaultValue;

	const name = label.toLowerCase();
</script>

<div class="my-2">
	<label class="block mb-2 text-md font-medium text-gray-900" for={name}>
		{label}
	</label>
	<input
		{type}
		{name}
		autocomplete="off"
		class="block px-2 py-1 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm"
		value={defaultValue || ""}
	/>
</div>

<style>
	input:focus {
		border: 2px solid #3b83f6a6;
		outline: none;
	}
</style>
