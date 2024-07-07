import axios from "axios"

export const groupNameValidation = (groupName) => {
    if (groupName.length < 3) {
        return {status: false, message: ['Название группы должно быть не меньше 3 символов']};
    }
    return {status: true}
}

export const checkGroupNameAvailability = async (groupName) => {
        
    const SERVER = `http://${process.env.HOST}:${process.env.PORT}`;
    
    try {
        const data = await axios(
            {url: `${SERVER}/groups/checkGroupName`, 
            method: 'GET',
            params: {groupName}})
        
        return data
            
    } catch (error) {
        return error.response.data
    }
}