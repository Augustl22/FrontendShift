import axios from "axios";

export const authorization = async (username, password) => {
		try {
			const response = await axios.post(
				"http://plannerrestapi.herokuapp.com/api/auth/signin",
				{
					password,
					username,
				}
			);
            console.log(response.data)
			alert(response.data.message);
		} catch (e) {
			alert(e.response.data.message);
		}
	};
