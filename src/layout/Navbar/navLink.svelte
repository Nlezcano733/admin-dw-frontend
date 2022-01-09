<script>
	import { Link } from "svelte-routing";
	export let link;
</script>

<li>
	<Link
		to={`/${link.toLowerCase()}`}
		class="block py-2 pr-4 pl-6 text-blue-600 font-semibold border-b border-gray-100
    md:text-white md:hover:bg-transparent md:border-0 md:transition md:hover:text-olive md:p-0"
	>
		{link}
	</Link>
</li>
