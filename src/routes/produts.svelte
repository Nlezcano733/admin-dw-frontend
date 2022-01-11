<script>
	import AddProduct from "../components/forms/addProduct.svelte";
</script>

<main class="grid grid-cols-12 auto-rows-min gap-y-4 mx-auto px-3 gap-x-4 md:gap-x-8">
	<div class="col-span-12 h-12 flex flex-wrap justify-between items-center border-b">
		<h3 class="text-2xl font-bold text-gray-900">Products</h3>
	</div>
	<div class="col-span-4">
		<AddProduct />
	</div>

	<section class="col-span-12 md:col-span-4" />
</main>
