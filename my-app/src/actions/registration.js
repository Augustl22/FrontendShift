import axios from "axios"

    export const registration = async (login, email, password) => {
        try{
            const response = await axios.post('http://plannerrestapi.herokuapp.com/api/auth/signup', {
                password,
                email,
                login
    
            })
            
            alert(response.data.message || "отправлено")
        } catch(e){
            alert(e.response.data.message)
        }

    }