<script>
	export let label;
	export let type;
	export let defaultValue = "";
	export let symbol;

	const name = label.toLowerCase();
</script>

<div class="my-2">
	<label for={name} class="block mb-2 text-md font-medium text-gray-900">
		{label}
	</label>
	<div class="flex">
		<span
			class="inline-flex items-center py-1 px-3 text-sm text-gray-900 bg-gray-200 
      rounded-l-md border border-r-0 border-gray-300"
		>
			{symbol}
		</span>
		<input
			{type}
			{name}
			value={defaultValue}
			class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 
      block flex-1 min-w-0 w-full text-sm px-2 py-1"
		/>
	</div>
</div>

<style>
	input:focus {
		border: 2px solid #3b83f6a6;
		outline: none;
	}
</style>
