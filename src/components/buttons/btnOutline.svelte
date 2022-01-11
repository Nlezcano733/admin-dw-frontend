<script>
	export let label;
	export let type;
</script>

<button
	{type}
	class=" hover:text-white border transition
  font-medium rounded-lg text-sm px-5 py-1 text-center mx-2"
>
	{label}
</button>

<style>
	button {
		color: #1d4ed8;
		border: 1px solid #1d4ed8;
	}

	button:hover,
	button:active {
		background-color: #1d4ed8;
	}
</style>
