import axios from "axios"
// import apiClient from "../../../Pull/Utils/APIClient"
const getCorrectUsername = async (username) => {
    const SERVER = `http://${process.env.HOST}:${process.env.PORT}` // подать через .env или отправить с помощью apiClient
    try {
        const data = await axios(
            {url: `${SERVER}/users/checkUser`, 
            method: 'GET',
            params: {'name': username}})
        return data;
            
    } catch (error) {
        console.error(error)
    }
}

export const usernameValidation = async (username) => {
    const response = await getCorrectUsername(username).then(res => res.data)
    if (response.status) {
        return {status: response.status};
    } else{
        return {status: response.status, message: response.message};
    }
}