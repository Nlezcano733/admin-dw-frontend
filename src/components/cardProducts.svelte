<script>
	export let id, title, brand, price, stock, picture;
</script>

<div class="w-full grid grid-cols-12 h-22 gap-x-5 my-5 pr-6 shadow-md">
	<img
		src={picture}
		alt={title}
		class="col-span-2 justify-self-center my-auto h-auto max-h-32 aspect-video bg-gray-100"
	/>
	<div class="col-span-8 py-2 ">
		<h2 class="font-semibold my-1">{title}</h2>
		<p class="text-gray-500 mt-1 mb-2">{brand}</p>
		<div class="flex flex-wrap my-1">
			<p class="text-sm mr-5">${price}</p>
			<p class="text-sm">Stock: {stock}</p>
		</div>
	</div>
	<div class="col-span-2 justify-self-end flex flex-col justify-center">
		<a
			type="button"
			href="products/{id}"
			class="btn-update text-white bg-green-600 transition hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-24 py-1 my-1 text-center"
		>
			Update
		</a>
		<button
			type="button"
			data-modal-toggle="modal"
			class="text-white bg-red-700 transition hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-24 py-1 my-1 text-center"
		>
			Delete
		</button>
	</div>
</div>
