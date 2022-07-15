import axios from "axios";

export const addNote = async (startDate,endDate,name,type,color) => {
	try {
		const response = await axios.post(
			"http://plannerrestapi.herokuapp.com/api/auth/signup",
			{
				dataRequest:{ 
                    startDate,
                    endDate
                },
				name,
				type,
                color
			}
		);

		alert(response.data.message);
	} catch (e) {
		alert(e.response.data.message);
	}
};