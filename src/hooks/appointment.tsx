import { useNavigation } from '@react-navigation/core';
import React, { createContext, useState, useContext, useEffect } from 'react';
import {useLogin} from '../hooks/login'
import api from '../services/api';

interface AppointmentContextData {
    getAppointment: (date: string, task_type: string, period: string, address: string, amount: string, note: string) => any;
    requestSuccess: boolean;
  }

interface AppintmentData {
  date: string;
  task_type: string;
  period: string;
  address: string;
  amount: string;
  note: string;
}
  
  
  const AppointmentContext = createContext<AppointmentContextData>({} as AppointmentContextData);
  
  const AppointmentProvider: React.FC = ({ children }) => {

    const [requestSuccess, setRequesSuccess] = useState(false)
      
    const {authToken} = useLogin()

    const getAppointment = async (date: string, task_type: string, period: string, address: string, amount: string, note: string) => {
        try {
            console.log('request', {
              provider_id:"18da8cbb-0fcc-4b0b-8a8c-a9028b33ae9f",
              date: date,
              task_type: task_type,
              period: period,
              customer_address: address,
              amount: amount,
              payment_method:"credit_card",
              masked_number:"1234567898765432",
              note: note
            })
            const result = await api.post('/appointments', 
            {
              provider_id:"18da8cbb-0fcc-4b0b-8a8c-a9028b33ae9f",
              date: date,
              task_type: task_type,
              period: period,
              customer_address: address,
              amount: amount,
              payment_method:"credit_card",
              masked_number:"1234567898765432",
              note: note
            },
            {
              headers: {
                Authorization: 'Bearer ' + authToken
              }})
              setRequesSuccess(true)
              return 
        } catch(error) {
            console.log('erro', error)
        }
    }


    return (
        <AppointmentContext.Provider
          value={{
            getAppointment,
            requestSuccess
          }}
        >
          {children}
        </AppointmentContext.Provider>
      );
    };
    
    function useAppointment(): AppointmentContextData {
      const context = useContext(AppointmentContext);
    
      if (!context) {
        throw new Error('Appointment is required');
      }
    
      return context;
    }
    
    export { AppointmentProvider, useAppointment };
    