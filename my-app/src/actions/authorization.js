import axios from "axios";

export const authorization = async (login, password) => {
		try {
			const response = await axios.post(
				"http://plannerrestapi.herokuapp.com/api/auth/signin",
				{
					password,
					login,
				}
			);
            console.log(response.data)
			alert(response.data.message);
		} catch (e) {
			alert(e.response.data.message);
		}
	};
