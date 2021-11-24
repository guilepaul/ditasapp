import React from 'react';
import { LoginProvider } from './login';

const AppProvider: React.FC = ({ children }) => (
    <LoginProvider>
        {
            children
        }
      </LoginProvider>
);

export default AppProvider;