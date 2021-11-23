import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Header from '../../components/Header'
import Button from '../../components/Button'
import Calendar, {DaySelected, MarkedDate} from '../../components/Calendar'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootNavigation} from '../../routes/app.routes';
import {Ionicons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';


import * as S from './styles';
import { FlatList } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

type schedulingScreenProp = StackNavigationProp<RootNavigation, 'Scheduling'>;

const serviceList = [
  {
    id: 1,
    icon: 'bed',
    text: '2 quartos'
  },
  {
    id: 2,
    icon: 'washing-machine',
    text: '1 áera de serviços'
  },
  {
    id: 3,
    icon: 'chef-hat',
    text: '1 cozinha'
  },
  {
    id: 4,
    icon: 'shower-head',
    text: '1 banheiro'
  },
  {
    id: 5,
    icon: 'sofa',
    text: '1 sala'
  },
  {
    id: 6,
    icon: 'flower',
    text: '1 sacada'
  },
]

const Scheduling: React.FC = () => {
  const navigation = useNavigation<schedulingScreenProp>();
  const [selectedDate, setSelectedDate] = useState<MarkedDate>({} as MarkedDate);
  const [isEnabled, setIsEnabled] = useState(false);
  const [checked, setChecked] = useState('first');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  function handleChangeDate(day: DaySelected){

  }


  return (
    <S.Fragment>
      <Header title='Agendamento' onPress={() => {
        if (navigation.canGoBack()) {
          console.log('deu aqui')
          navigation.goBack();
        } else {
          console.log('nao deu aqui')
          navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
        }
      }}/>
      <S.Container>
        <S.DescriptionWrapper>
        <S.DescriptionTitle>Faxina padrão</S.DescriptionTitle>
        <S.DescriptionText>Aquela faxina rápida pra deixar sua casa limpinha, com a qualidade que você conhece e confia.</S.DescriptionText>
        </S.DescriptionWrapper>
        <S.ServiceCardList>
          <FlatList 
            data={serviceList}
            horizontal
            style={{marginRight: 16, overflow: 'visible'}}
            keyExtractor={(_, idx) => String(idx)}
            showsHorizontalScrollIndicator = {false}
            renderItem={({item, index}) => (
              <S.ServiceCardWrapper>
                <S.ServiceCard>
                  <MaterialCommunityIcons size={48} name={item.icon} color={theme.colors.brand} />
                </S.ServiceCard>
                <S.DescriptionTextCard>{item.text}</S.DescriptionTextCard>
              </S.ServiceCardWrapper>
              )}
          />
        </S.ServiceCardList>

        <S.DescriptionWrapper>
        <S.GeneralTitle>Agendamento</S.GeneralTitle>
        <Calendar
          markedDate={{'2021-11-25': {selected: true, marked: false    }}}
          onDayPress={day => console.log(day)}
        />
        </S.DescriptionWrapper>
        <S.SwitchWrapper>
          <S.GeneralTitle>Período</S.GeneralTitle>
          <S.SwitchValue>
            <S.SwitchText>{isEnabled ? 'Manhã' : 'Tarde'}</S.SwitchText>
            <Switch
            trackColor={{ false: '#767577', true: theme.colors.brand_lt }}
            thumbColor={isEnabled ? theme.colors.funnel_lt : theme.colors.brand_lt }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          </S.SwitchValue>
      </S.SwitchWrapper>
      <S.PeriodWrapper>
        <S.PeriodButton isActive={true}>
          <S.PeriodText isActive={true} >07:00</S.PeriodText>
        </S.PeriodButton>
        <S.PeriodButton isActive={false}>
          <S.PeriodText isActive={false}>07:30</S.PeriodText>
        </S.PeriodButton>
        <S.PeriodButton isActive={false}>
          <S.PeriodText isActive={false}>08:00</S.PeriodText>
        </S.PeriodButton>
        <S.PeriodButton isActive={false}>
          <S.PeriodText isActive={false}>08:30</S.PeriodText>
        </S.PeriodButton>
      </S.PeriodWrapper>
      <S.PeriodContent>Horários disponíveis para esse período. Sujeito a variaçoes devido ao trânsito e as variações climáticas.</S.PeriodContent>
      <S.PlaceWrapper>
        <S.GeneralTitle>Local da faxina</S.GeneralTitle>

        <S.PlaceCard>
          <S.RadioIOSWrapper>
          <RadioButton 
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            uncheckedColor={theme.colors.brand_lt}
            color={theme.colors.brand_dk}
          />
          </S.RadioIOSWrapper>
          <S.AddressWrapper>
            <S.PlaceTitle>Minha casa</S.PlaceTitle>
            <S.PlaceAddress>Rua dos Girassóis, 124</S.PlaceAddress>
          </S.AddressWrapper>
        </S.PlaceCard>

        <S.PlaceCard>
        <S.RadioIOSWrapper>
        <RadioButton 
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          uncheckedColor={theme.colors.brand_lt}
          color={theme.colors.brand_dk}
          />
          </S.RadioIOSWrapper>

          <S.AddressWrapper>
            <S.PlaceTitle>Casa da Mainha</S.PlaceTitle>
            <S.PlaceAddress>Rua Itu, 32</S.PlaceAddress>
          </S.AddressWrapper>
        </S.PlaceCard>

      </S.PlaceWrapper>
      <S.ButtonConfirm>
      <Button label='Agendar agora' onPress={() => console.log('Agendar Agora')} />
      </S.ButtonConfirm>
      <S.Footer />
      </S.Container>
    </S.Fragment>
  );
}

export default Scheduling;