<script>
	import AddProduct from "../components/forms/addProduct.svelte";
	import CardProducts from "../components/cardProducts.svelte";
	import { onMount } from "svelte";

	const products = [];

	onMount(() => {
		console.log("data");
	});
</script>

<main class="grid grid-cols-12 auto-rows-min gap-y-4 mx-auto px-3 gap-x-4 md:gap-x-8">
	<div class="col-span-12 h-12 flex flex-wrap justify-between items-center border-b">
		<h3 class="text-2xl font-bold text-gray-900">Products</h3>
	</div>
	<section class="col-span-4">
		<AddProduct />
	</section>

	<section class="col-span-12 md:col-span-8 h-full">
		<h2 class="text-xl font-bold text-gray-700">List of products</h2>

		{#each products as prod}
			<CardProducts {...prod} />
		{:else}
			<p class="text-gray-500 text-md py-8 md:py-20 text-center">There are not products availables</p>
		{/each}
	</section>
</main>
