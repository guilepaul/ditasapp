import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootNavigation} from '../../routes/app.routes';

import * as S from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

type successScreenProp = StackNavigationProp<RootNavigation, 'Success'>;

const Success: React.FC = () => {

    const navigation = useNavigation<successScreenProp>();
  return (
      <S.Fragment>
          <Header title='Agendamento concluído' />
          <S.Container>
              <S.Imagewrapper>
                  <S.Image source={require('../../assets/desenho.png')}/>
              </S.Imagewrapper>
              <View>
                <S.SuccessTitle>Parabéns!</S.SuccessTitle>
                <S.SuccessTitle>Seu agendamento foi concluído.</S.SuccessTitle>
                <S.SuccessText>
                    Uma Dita será selecionada para o serviço e você poderá acompanhar o status do seu agendamento na sessão {<S.SuccessTextBrand>Agenda</S.SuccessTextBrand>}
                </S.SuccessText>
              </View>
                <View>
                    <S.ButtonsWrapper>
                    <Button  
                    onPress={() => {
                        navigation.navigate("Success")
                    }} 
                    label='Ir para a Agenda' 
                    />
                    </S.ButtonsWrapper>
                    <S.ButtonsWrapper>
                    <Button 
                    type='outline' 
                    onPress={() => {
                        navigation.navigate("Início")
                    }}
                    label='Voltar para o Início'
                    />
                    </S.ButtonsWrapper>
              </View>

          </S.Container>
      </S.Fragment>
  );
}

export default Success;