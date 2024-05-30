import axios from "axios";

export class AuthApi {
    async login(dto) {
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/login`, dto);
            console.log("auth data", data);
            const userType = data.userType;
            localStorage.setItem('userType', userType); // Store userType in local storage
            return data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    async getUserType() {
        try {
            // Try to retrieve userType from local storage
            const userType = localStorage.getItem('userType');
            console.log("aRE WE GETTING USERtYPE ", userType)
            if (userType) {
                return userType;
            } else {
                // If userType is not available in local storage, fetch it from the server
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/get-user-type`);
                console.log("User type data:", data);
                return data.userType;
            }
        } catch (error) {
            console.error("Error getting user type:", error);
            throw error;
        }
    }

    async signUp(dto) {
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/register`, dto);
            return data;
        } catch (error) {
            console.error("Error during sign up:", error);
            throw error;
        }
    }
}
