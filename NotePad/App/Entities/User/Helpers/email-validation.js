import axios from "axios";

export const emailValidation = (email) => {
    const correct = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/
    if (!correct.test(email)) {
        return false
    }
    return true;
}

const getCorrectEmail = async (email) => {
    const SERVER = `http://${process.env.HOST}:${process.env.PORT}` // подать через .env или отправить с помощью apiClient
    try {
        const data = await axios(
            {url: `${SERVER}/users/checkEmail`, 
            method: 'GET',
            params: {'email': email}})
        return data;
            
    } catch (error) {
        console.error(error)
    }
}

export const checkAvailabilityEmail = async (email) => {
    const response = await getCorrectEmail(email).then(res => res.data)
    if (response.status) {
        return {status: response.status};
    } else {
        return {status: response.status, message: response.message};
    }
}