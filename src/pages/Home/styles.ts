import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'



export const Fragment = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray50};
`;

export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.gray50};
  padding: 0 0 72px 0;
`;

export const Greetings = styled.View`
    margin-top: 16px;
    padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-top: 10px;
`;

export const CardsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Card = styled.View`
width: ${RFValue(156)}px;
height: ${RFValue(156)}px;
background: ${({theme}) => theme.colors.gray100};
border: 1px solid ${({theme}) => theme.colors.gray300};
box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
border-radius: 8px;
align-items: center;
justify-content: space-between;
padding: 12px;
elevation: 5;
`;

export const CardBrand = styled.View`
width: ${RFValue(156)}px;
height: ${RFValue(156)}px;
background: ${({theme}) => theme.colors.brand};
border: 1px solid ${({theme}) => theme.colors.gray300};
box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
border-radius: 8px;
align-items: center;
justify-content: space-between;
padding: 12px;
elevation: 5;
`;

export const CardContent = styled.View`
    align-items: center;
`;

export const IconWrapperBrand = styled.View`
width: ${RFValue(42)}px;
height: ${RFValue(42)}px;
background-color: ${({theme}) => theme.colors.brand_lt};
border-radius: 50px;
`
export const IconWrapper = styled.View`
width: ${RFValue(42)}px;
height: ${RFValue(42)}px;
background-color: ${({theme}) => theme.colors.brand_lt2};
border-radius: 50px;
`
export const CardTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand};
  margin-top: 6px;
  text-align: center;
`;

export const CardSubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray500};
  margin-top: 6px;
`;

export const CardPrice = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.black};
  margin-top: 6px;
`;
export const CardTitleBrand = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.white};
  margin-top: 6px;
  text-align: center;
`;

export const CardSubTitleBrand = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.white};
  margin-top: 6px;
`;

export const CardPriceBrand = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.white};
  margin-top: 6px;
`;

export const BannersWrapper = styled.View`
    margin-bottom: 72px;
`;

export const NewsWrapper = styled.View`
    margin-top: 24px;
    padding: 0 16px;
    align-items: flex-start;
`;

export const NewsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
  margin-top: 6px;
  margin-bottom: 24px;
  text-align: center;
`;

export const NewsCard = styled.View`
    position: relative;
    width: 100%;
    height: ${RFValue(156)}px;
    border-radius: 8px;
    justify-content: flex-end;
`;

export const NewsImage = styled.Image`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%; 
    border-radius: 8px;
`;


export const SubTitleBackGround = styled(LinearGradient)`
    width: 100%;
    height: ${RFValue(110)}px;
    position: absolute;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-radius: 8px;
    justify-content: flex-end;
    padding: 16px;
    padding-right: 10px;
`;

export const NewsSubtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const NewsContent = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.white};
  margin-top: 8px;
`;





