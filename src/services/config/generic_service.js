import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.API_URL;

const doGet = async (path) => {
	try {
		const res = await axios.get(`${url}/${path}`);
		return res;
	} catch (e) {
		console.error(`Error GET ${url}: ${e}`);
		return [];
	}
};

const doPost = async (path, data) => {
	try {
		res = await axios.post(`${url}/${path}`, data);
		return res;
	} catch (e) {
		console.error(`Error POST ${url}: ${e}`);
		return [];
	}
};

const doEdit = async (path, id, data) => {
	try {
		res = await axios.patch(`${url}/${path}/${id}`, data);
		return res;
	} catch (e) {
		console.error(`Error PATCH ${url}: ${e}`);
		return [];
	}
};

const doDelete = async (path, id) => {
	try {
		const res = await axios.delete(`${url}/${path}/${id}`);
		return res;
	} catch (e) {
		console.error(`Error DELETE ${url}: ${e}`);
		return [];
	}
};

export default {
	doGet,
	doPost,
	doEdit,
	doDelete,
};
