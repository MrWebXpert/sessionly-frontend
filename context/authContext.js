
import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthApi } from '@/app/api/auth';

const authApi = new AuthApi();

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  const login = async (dto) => {
    try {
      const { data } = await authApi.login(dto);
      const userType = data.userType;
      localStorage.setItem('userType', userType);
      setUserType(userType);
      return data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  useEffect(() => {
    const userTypeFromLocalStorage = localStorage.getItem('userType');
    if (userTypeFromLocalStorage) {
      setUserType(userTypeFromLocalStorage);
    }
  }, []);

  console.log(userType);

  return (
    <AuthContext.Provider value={{ userType, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context.userType;
};

export { AuthProvider, useAuth, AuthContext };
