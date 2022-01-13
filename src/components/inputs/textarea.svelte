<script>
	export let label;
	export let defaultValue = "";

	const name = label.toLowerCase();
</script>

<div class="my-2">
	<label class="block mb-2 text-md font-medium text-gray-900" for={name}>
		{label}
	</label>
	<textarea
		{name}
		class="block p-2 h-24 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
	>
		{defaultValue}
	</textarea>
</div>

<style>
	textarea {
		resize: none;
	}
	textarea:focus {
		border: 2px solid #3b83f6a6;
		outline: none;
	}
</style>
