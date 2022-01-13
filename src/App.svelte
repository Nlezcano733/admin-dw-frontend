<script>
	import { Router, Route } from "svelte-routing";
	import Layout from "./layout/layout.svelte";
	import Index from "./routes/index.svelte";
	import Products from "./routes/products.svelte";
</script>

<Router>
	<Layout>
		<Route path="/" component={Index} />
		<Route path="/products" component={Products} />
	</Layout>
</Router>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
