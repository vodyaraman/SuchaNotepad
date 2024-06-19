import axios from "axios";
import apiClient from "../../../Pull/Utils/APIClient";

export const validateUserData = async (userData) => {
    try {
        const response = await apiClient.post('/users/validateUserData', userData).then(data => data.data)
        return response

    } catch (error) {
        if(axios.isAxiosError(error)){
            return error.response.data
        }
    }
}

