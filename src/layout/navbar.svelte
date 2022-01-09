<script>
	import { Link } from "svelte-routing";
	import NavLink from "./Navbar/navLink.svelte";
	let hideNav = true;

	const handleMobile = () => (hideNav = !hideNav);
</script>

<header class="bg-gradient-to-r from-blue-700 to-blue-600 px-2 sm:px-4 py-2.5 sticky top-0">
	<div class="container mx-auto px-4">
		<nav class="flex flex-wrap justify-between items-baseline">
			<Link href="/" class="flex digital-logo text-olive">
				<span class="self-center text-2xl font-bold whitespace-nowrap"> Digital World </span>
			</Link>

			<button
				type="button"
				on:click={handleMobile}
				class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden 
        focus:outline-none focus:ring-gray-200"
			>
				<span class="sr-only">Open main menu</span>
				<span class="text-xl text-white">
					<i class="fas fa-bars" />
				</span>
			</button>

			<div
				class={`${hideNav && "hidden"} w-full bg-white mt-4 pt-0 z-50 md:block md:w-auto md:bg-transparent`}
			>
				<ul class="z-50 flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
					<NavLink link="Products" />
					<NavLink link="Orders" />
				</ul>
			</div>
		</nav>
	</div>
</header>
