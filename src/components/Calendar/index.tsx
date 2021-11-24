import React, { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { View } from 'react-native';

import {Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';


import * as S from './styles';

LocaleConfig.locales['pt-br'] ={
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br'

export interface MarkedDate {
    [date: string] : {
        selected: boolean;
        marked: boolean;
    }
}

interface CalendarProps {
    markedDate: MarkedDate;
    onDayPress: (date: DaySelected) => void;
}

export interface DaySelected {
    dateString: string
    day: number
    month: number
    timestamp: number
    year: number
  }

const Calendar: React.FC<CalendarProps> = ({markedDate, onDayPress}) => {

const theme = useTheme();
    
  return (
      <CustomCalendar
        renderArrow={(direction) => 
            <FontAwesome 
                size={16}
                color={theme.colors.brand_dk2}
                name={direction === 'left' ? 'chevron-left' :  'chevron-right'}
            />
        }
        headerStyle={{
            backgroundColor: theme.colors.brand_lt2,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.brand,
            paddingBottom: 10,
            marginBottom: 10,
        }}
        theme={{
            calendarBackground: theme.colors.brand_lt2,
            textDayFontFamily: theme.fonts.regular,
            textDayHeaderFontFamily: theme.fonts.medium,
            textDayHeaderFontSize: 10,
            textMonthFontSize: 18,
            textMonthFontFamily: theme.fonts.medium,
            monthTextColor: theme.colors.brand_dk2,
            selectedDayTextColor: theme.colors.funnel,
            selectedDayBackgroundColor: theme.colors.funnel_lt,
            arrowStyle: {
                marginHorizontal: -15
            }
        }}
        firstDay={1}
        style={{borderRadius: 8, borderColor: theme.colors.brand}}
        minDate={new Date()}
        onDayPress={onDayPress}
        markingType='custom'
        markedDates={markedDate}
      />
  );
}

export default Calendar;