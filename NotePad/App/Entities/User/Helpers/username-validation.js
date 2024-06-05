import axios from "axios"
// import apiClient from "../../../Pull/Utils/APIClient"
const getCorrectUsername = async (username) => {
    const SERVER = 'http://localhost:10101' // подать через .env или отправить с помощью apiClient
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
    const status = await getCorrectUsername(username).then(res => res.data.status)
    if (status) {
        return true;
    } else{
        console.log('Такой пользователь уже существует!')
        return false;
    }
}