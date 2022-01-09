<script>
	import Navbar from "./navbar.svelte";
	import Footer from "./footer.svelte";
</script>

<Navbar />
<main class="container mx-auto border py-8 px-4">
	<slot />
</main>
<Footer />
