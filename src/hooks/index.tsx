import React from 'react';
import { LoginProvider } from './login';
import { AppointmentProvider } from './appointment';

const AppProvider: React.FC = ({ children }) => (
    <LoginProvider>
        <AppointmentProvider>
        {
            children
        }
        </AppointmentProvider>
      </LoginProvider>
);

export default AppProvider;