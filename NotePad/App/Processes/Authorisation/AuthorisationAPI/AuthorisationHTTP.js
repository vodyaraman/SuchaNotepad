import HttpClient from "../../../Pull/RawAPI/HTTPClientAxios";

class AuthorisationHTTP {
    constructor() {
            this.HttpClient = new HttpClient("URL");
    }

    async getUsersLogin(password){
        try {
            const response = HttpClient.post('/users/submitData', { password })
            return response
        } catch (error) {
            console.error('Error submitting data:', error);
            throw error;
        }
    }
}

export default AuthorisationHTTP