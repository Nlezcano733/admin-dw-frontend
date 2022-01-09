<script>
	import Input from "../components/inputs/input.svelte";
	import InputBtn from "../components/inputs/inputBtn.svelte";
	import Textarea from "../components/inputs/textarea.svelte";
	import Select from "../components/inputs/select.svelte";
</script>

<section class="grid grid-cols-12">
	<div class="col-span-4">
		<Input label="Prueba" type="text" />
		<InputBtn label="Prueba" type="number" symbol="$" />
		<Textarea label="Prueba" defaultValue="Prueba de texto" />
		<Select label="Prueba" values={["Componentes", "Hardware", "Software"]} />
		<Select label="Prueba" values={["Components", "Hardware", "Software"]} defaultValue="components" />
	</div>
</section>
