<script>
	export let label;
	export let type;
</script>

<button {type} class={`text-white transition font-medium rounded-lg text-sm px-5 py-1 text-center mx-2`}>
	{label}
</button>

<style>
	button {
		background-color: #1d4ed8;
		border: 1px solid #1e40af;
	}

	button:hover,
	button:active {
		background-color: #1e40af;
	}
</style>
