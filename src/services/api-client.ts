import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "f5bd30c6d2754be0a19a1f4076d10e30",
	},
});
