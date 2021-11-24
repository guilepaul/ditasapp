import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface LoginContextData {
    getToken: () => void;
    authToken: string;
  }
  
  
  const LoginContext = createContext<LoginContextData>({} as LoginContextData);
  
  const LoginProvider: React.FC = ({ children }) => {
      
    const [authToken, setAuthToken] = useState<string>()

    const getToken = async () => {
        try {
            const result = await api.post('/sessions', 
            {
                email: "silviadasilva@gmail.com",
                password:"teste123"
            })
            setAuthToken(result.data.token)
            console.log('login', result.data.token)
        } catch(error) {
            console.log('erro', error)
        }
    }


    return (
        <LoginContext.Provider
          value={{
            getToken,
            authToken
          }}
        >
          {children}
        </LoginContext.Provider>
      );
    };
    
    function useLogin(): LoginContextData {
      const context = useContext(LoginContext);
    
      if (!context) {
        throw new Error('Login is required');
      }
    
      return context;
    }
    
    export { LoginProvider, useLogin };
    