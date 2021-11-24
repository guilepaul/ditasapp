import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootNavigation} from '../../routes/app.routes';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextArea, Center, NativeBaseProvider } from "native-base"
import {Ionicons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import Header from '../../components/Header';
import { 
  parseISO, 
  format
} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import * as S from './styles';
import theme from '../../global/styles/theme';
import Button from '../../components/Button';

type confirmationScreenProp = StackNavigationProp<RootNavigation, 'Confirmation'>;

const Confirmation: React.FC = () => {

    const navigation = useNavigation<confirmationScreenProp>();
    const route = useRoute<any>();
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState('');

    const dateString = parseISO(route.params?.completeDateString);

    useEffect(() => {
      const formatedDate = format(
        dateString,
        "'Dia' dd 'de' MMMM'",
        { locale: pt }
      )

      setDate(formatedDate)
    }, [])
    
  return (
      <S.Fragment>
          <Header title='Agendar Agora' onPress={() => {
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
        <S.DescriptionTitle>Resumo do Agendamento</S.DescriptionTitle>
        <S.DescriptionText>Limpeza Padrão, com os produtos YVY que a Dita vai levar, para sua tranquilidade.</S.DescriptionText>
      </S.DescriptionWrapper>

      <S.StepCardWrapper>
          <S.StepCard>
            <S.StepText>Serviço: {route.params?.type}</S.StepText>
          </S.StepCard>
          <S.StepCard>
            <S.StepText>Data: {date}</S.StepText>
          </S.StepCard>
          <S.StepCard>
            <S.StepText>Período: {route.params?.period}, {route.params?.hour}h</S.StepText>
          </S.StepCard>
          <S.StepCard>
            <S.StepText>Local: {route.params?.locale}</S.StepText>
          </S.StepCard>
      </S.StepCardWrapper>

      <S.TotalWrapper>
          <S.TotalTitle>Valor total</S.TotalTitle>
          <S.TotalCard>
              <S.TotalValue>R$ 79,90</S.TotalValue>
          </S.TotalCard>
      </S.TotalWrapper>

      <S.PaymentWrapper>
          <S.PaymentTypeTitle>Forma de pagamento</S.PaymentTypeTitle>
          <S.PaymentCard>
                  <S.CardIconWrapper>
                    <MaterialCommunityIcons size={36} name={'credit-card'}  color={theme.colors.brand}/>
                  </S.CardIconWrapper>
              <S.CardWrapper>
                  <S.PaymentCardName>Banco Card</S.PaymentCardName>
                  <S.PaymentCardNumber>*****1234</S.PaymentCardNumber>
              </S.CardWrapper>
          </S.PaymentCard>
          <S.MorePaymentsType>
            <Button type='outline' label='+ Formas de pagamento' onPress={() => {}} />
          </S.MorePaymentsType>
      </S.PaymentWrapper>

      <S.ObsWrapper>
        <S.ObsTitle>Observações</S.ObsTitle>
        <S.ObsText>Se você precisa que algo seja feito de uma forma específica, do seu jeito, diz pra Dita aqui nas Observações</S.ObsText>
        <NativeBaseProvider>
        <TextArea
          borderColor={theme.colors.brand_dk}
          borderWidth={2}
          borderRadius={8}
          placeholderTextColor={theme.colors.brand_lt}
          fontSize={16}
          color={theme.colors.brand}
          h={40}
          placeholder="Escreva aqui suas observações..."
          w={{
            base: "100%",
            md: "50%",
          }}
        />
        </NativeBaseProvider>
      </S.ObsWrapper>

      

      <S.Footer/>

      <S.ModalConfirmation 
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <S.ModalBackground>
          <S.ModalContent>
            <S.ModalTitle>Deseja finalizar o agendamento?</S.ModalTitle>
            <S.ModalButtonWrapper>
            <Button  
              small 
              onPress={() => {
                setModalVisible(false)
                navigation.navigate("Success")
              }} 
              label='Sim, quero finalizar' 
              />

            <Button 
              type='outline' 
              small 
              onPress={() => {
                setModalVisible(false)
                navigation.navigate("Scheduling")
              }}
              label='Não, mudei de ideia'
              />
            </S.ModalButtonWrapper>
          </S.ModalContent>
        </S.ModalBackground>
      </S.ModalConfirmation>
      </S.Container>
      <S.ButtonConfirm>
      <Button label='Finalizar agendamento' onPress={() =>  setModalVisible(true)} />
      </S.ButtonConfirm>
      </S.Fragment>
  );
}

export default Confirmation;