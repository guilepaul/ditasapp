import React from 'react';
import {Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import Spray from '../../assets/Spray'
import VacuumCleaner from '../../assets/VacuumCleaner'
import * as S from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootNavigation} from '../../routes/app.routes'

type homeScreenProp = StackNavigationProp<RootNavigation, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<homeScreenProp>() 
  return (
      <S.Fragment>
      <S.Container>
          <S.Greetings>
            <S.Title>Olá, Sandra</S.Title>
            <S.Subtitle>Boas vindas ao Ditas. O que gostaria de fazer hoje?</S.Subtitle>
          </S.Greetings>
          <S.CardsWrapper>
              <TouchableOpacity onPress={() => navigation.navigate("Scheduling")}>
              <S.CardBrand>
                <S.CardContent>  
                    <S.IconWrapperBrand>
                        <Spray/>   
                    </S.IconWrapperBrand>
                    <S.CardTitleBrand>Faxina padrão</S.CardTitleBrand>
                    <S.CardSubTitleBrand>Meio período</S.CardSubTitleBrand>
                </S.CardContent>
                <S.CardPriceBrand>R$ 79,90</S.CardPriceBrand>
              </S.CardBrand>
              </TouchableOpacity>  

              <S.Card>
                <S.CardContent>  
                    <S.IconWrapper>
                        <VacuumCleaner/>   
                    </S.IconWrapper>
                    <S.CardTitle>Faxina personalizada</S.CardTitle>
                    <S.CardSubTitle>A partir de</S.CardSubTitle>
                </S.CardContent>
                <S.CardPrice>R$ 99,90</S.CardPrice>
              </S.Card>
          </S.CardsWrapper>
          <S.BannersWrapper>
          <S.NewsWrapper>
              <S.NewsTitle>Novidades</S.NewsTitle>
              <S.NewsCard>
                <S.NewsImage source={{uri:'https://i.imgur.com/ntgXb7b.png'}} style={{resizeMode: 'cover'}}/>
                <S.SubTitleBackGround colors={['transparent', 'rgba(0,0,0,0.9)']}>
                    <S.NewsSubtitle>Alexa!</S.NewsSubtitle>
                    <S.NewsContent>
                        Baixe agora mesmo a integração e peça uma Dita pela Alexa!
                    </S.NewsContent>
                </S.SubTitleBackGround>
              </S.NewsCard>
          </S.NewsWrapper>

          <S.NewsWrapper>
              <S.NewsTitle>Nossas Ditas</S.NewsTitle>
              <S.NewsCard>
                <S.NewsImage source={{uri:'https://i.imgur.com/CzpqION.jpg'}} style={{resizeMode: 'cover'}}/>
                <S.SubTitleBackGround colors={['transparent', 'rgba(0,0,0,0.9)']}>
                    <S.NewsSubtitle>Maria Eudete</S.NewsSubtitle>
                    <S.NewsContent>
                        Conheça algumas histórias surpreendentes sobre as mulheres incríveis que fazem parte da Ditas
                    </S.NewsContent>
                </S.SubTitleBackGround>
              </S.NewsCard>
          </S.NewsWrapper>
          <S.NewsWrapper>
              <S.NewsTitle>Produtos Naturais</S.NewsTitle>
              <S.NewsCard>
                <S.NewsImage source={{uri:'https://i.imgur.com/7IKKExW.jpg'}} style={{resizeMode: 'cover'}}/>
                <S.SubTitleBackGround colors={['transparent', 'rgba(0,0,0,0.9)']}>
                    <S.NewsSubtitle>Yvy</S.NewsSubtitle>
                    <S.NewsContent>
                        Descubra mais sobre os produtos 100% naturais da nossa parceira YVY
                    </S.NewsContent>
                </S.SubTitleBackGround>
              </S.NewsCard>
          </S.NewsWrapper>
          </S.BannersWrapper>
      </S.Container>
      </S.Fragment>
  );
}

export default Home;