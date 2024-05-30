import { createContext, useContext, useState } from "react";
import { LoginDto } from "@/dto/LoginDto";
import { AuthService } from "@/services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (userData) => {
        try {
            setLoading(true);
            const authService = new AuthService();
            const data = await authService.login(userData);
            setUser(data);
            setLoading(false);
            return data;
        } catch (error) {
            console.error("Error during login:", error);
            setLoading(false);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
