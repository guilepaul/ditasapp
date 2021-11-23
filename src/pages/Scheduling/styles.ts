import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface PeriodButtonProps {
  isActive: boolean;
}

export const Fragment = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray50};
`;

export const Container = styled.ScrollView`
  flex: 1;  
  background-color: ${({theme}) => theme.colors.gray50};
  padding: 32px 0 72px 0;
`;

export const DescriptionWrapper = styled.View`
  padding: 0 16px;
`;

export const DescriptionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
  margin-top: 6px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-top: 16px;
`;

export const ServiceCardList = styled.View`
  width: 100%;
  padding: 16px 0 32px 16px;
`;

export const ServiceCardWrapper = styled.View`
  align-items: center;
`;


export const ServiceCard = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  margin: 0 4px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.brand_lt};
  align-items: center;
  justify-content: center;
`;

export const DescriptionTextCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const GeneralTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const SwitchWrapper =styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding: 0 16px;
`;
export const SwitchValue =styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-right: 6px;
`;

export const PeriodWrapper = styled.View`
  flex-direction: row;
  padding: 0 16px;
`;

export const PeriodButton = styled.View<PeriodButtonProps>`
  width: 56px;
  height: 26px;
  justify-content: center;
  align-items: center;
  background-color: ${({isActive, theme}) => isActive ? theme.colors.brand : theme.colors.funnel_lt};
  border-radius: 25px;
  margin: 6px;
`;

export const PeriodText = styled.Text<PeriodButtonProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({isActive, theme}) => isActive ? theme.colors.white : theme.colors.gray700};
`;

export const PeriodContent = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-top: 16px;
  padding: 0 16px;
`;

export const PlaceWrapper = styled.View`
  margin-top: 32px;
  padding: 0 16PX;
`;

export const PlaceCard = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.colors.gray300};
`;

export const RadioIOSWrapper = styled.View`
  width: ${Platform.OS === 'ios' ? 35 : 35}px;
  height: ${Platform.OS === 'ios' ? 35 : 35}px;
  align-items: center;
  justify-content: center;
  background-color: ${Platform.OS === 'ios' ? theme.colors.brand_lt : 'transparent'};
  border-width: ${Platform.OS === 'ios' ? 1 : 0}px;
  border-color: ${({theme}) => theme.colors.gray300};
  border-radius: 50px;
  margin-left: 8px;
  margin-right: 16px;
`;

export const AddressWrapper = styled.View``;

export const PlaceTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const PlaceAddress = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
`;

export const ButtonConfirm = styled.View`
  width: 100%;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 32px;
`;



export const Footer = styled.View`
  width: 100%;
  height: 72px;
`;