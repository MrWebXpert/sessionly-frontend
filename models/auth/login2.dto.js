import axios from 'axios';

export class AuthService {
    async login(dto) {
        try {
            const { data } = await axios.post(``${ process.env.NEXT_PUBLIC_BACKEND_URL }`/api/v2/login`, dto);
            console.log("auth data", data)
            return data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    async getUserType() {
        try {
            const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/user/type`);
            console.log("user type data", data)
            return data.userType;
        } catch (error) {
            console.error("Error getting user type:", error);
            throw error;
        }
    }
}
