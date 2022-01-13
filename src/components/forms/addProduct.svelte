<script>
	import Input from "../inputs/input.svelte";
	import InputBtn from "../inputs/inputBtn.svelte";
	import InputDatalist from "../inputs/inputDatalist.svelte";
	import Select from "../inputs/select.svelte";
	import Textarea from "../inputs/textarea.svelte";

	import Btn from "../buttons/btn.svelte";
	import BtnOutline from "../buttons/btnOutline.svelte";
</script>

<form>
	<Input label="Title" type="text" />
	<Input label="Brand" type="text" />
	<Textarea label="Description" />
	<InputBtn label="Price" symbol="$" type="number" />
	<Input label="Stock" type="number" />
	<Select label="type" values={["Components", "Hardware", "Software"]} />
	<Input label="Category" type="text" />

	<div class="flex flex-wrap justify-end mt-4">
		<BtnOutline label="Reset" type="reset" />
		<Btn label="Add product" type="submit" />
	</div>
</form>
