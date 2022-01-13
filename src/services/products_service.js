import generic_service from "./config/generic_service";

const url = "products/";

export default {
	list: () => generic_service.doGet(url),
	create: (data) => generic_service.doPost(url, data),
	delete: (id) => generic_service.doDelete(url, id),
	update: (id, data) => generic_service.doEdit(url, id, data),
};
