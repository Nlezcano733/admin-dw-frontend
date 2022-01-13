import { writable } from "svelte/store";
import products_service from "../services/products_service";

function productsStore() {
	const products = writable({});
	const loading = writable(false);
	const error = writable(false);

	async function get() {
		loading.set(true);
		error.set(false);
		try {
			products.set(await products_service.list());
		} catch (e) {
			error.set(e);
		}
		loading.set(false);
	}

	async function backgroundGet() {
		loading.set(false);
		error.set(false);
		try {
			products.set(await products_service.list());
		} catch (e) {
			error.set(e);
		}
	}

	get();

	return {
		products,
		loading,
		error,
		get,
		backgroundGet,
	};
}

export const products = productsStore();
