<script>
	import { Link } from "svelte-routing";
</script>

<footer class="bg-gray-100 border border-gray-200 px-2 sm:px-4 py-2.5 text-gray-600 body-font">
	<div class="container mx-auto px-4 flex flex-wrap justify-between items-baseline">
		<Link
			to="/"
			class="flex title-font digital-logo items-center mr-2 md:mr-0 md:justify-start justify-center text-gray-400"
		>
			<span class="self-center text-lg md:text-xl font-bold whitespace-nowrap"> Digital World </span>
		</Link>

		<p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
			© 2021 Nlezcano
		</p>

		<span class="inline-flex ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a
				class="text-gray-500 hover:text-olive transition"
				href="https://www.linkedin.com/in/nlezcano/"
				target="blank"
			>
				<span class="text-lg"><i class="fab fa-linkedin-in" /></span>
			</a>
			<a
				class="ml-5 text-gray-500 hover:text-olive transition"
				href="https://github.com/Nlezcano733"
				target="blank"
			>
				<span class="text-lg"><i class="fab fa-github-alt" /></span>
			</a>
		</span>
	</div>
</footer>
