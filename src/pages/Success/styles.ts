import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Fragment = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray50};
`;

export const Container = styled.View`
  flex: 1;  
  background-color: ${({theme}) => theme.colors.gray50};
  padding: 32px 32px 72px 32px;
  justify-content: space-around;
`;

export const Imagewrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${RFPercentage(36)}px;
    height: ${RFPercentage(36)}px;
`;

export const SuccessTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const SuccessText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const SuccessTextBrand = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand};
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ButtonsWrapper= styled.View`
  width: 100%;
  align-items: center;

  margin-top: 32px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 72px;
`;