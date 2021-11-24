import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

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

export const StepCardWrapper = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-top: 32px;
`;
export const StepCard = styled.View`
    width: 100%;
    height: 44px;
    border-left-width: 6px;
    border-left-color: ${({theme}) => theme.colors.funnel};
    border-radius: 4px;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.gray200};
    padding-left: 16px;
    margin-bottom: 16px;
`;

export const StepText = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const TotalWrapper = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-top: 32px;
`;

export const TotalTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const TotalCard= styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.gray300};
`;

export const TotalValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(28)}px;
  color: ${({theme}) => theme.colors.funnel_dk};
`;

export const PaymentWrapper = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-top: 32px;
`;

export const PaymentTypeTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const PaymentCard = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;

  background-color: ${({theme}) => theme.colors.gray300};
`;

export const CardIconWrapper = styled.View`
    margin-right: 16px;
`;

export const CardWrapper = styled.View``;

export const PaymentCardName = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const PaymentCardNumber = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
`;

export const AddPaymentCard = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  

  background-color: ${({theme}) => theme.colors.gray300};
`;

export const MorePaymentsType = styled.View`
    width: 100%;
    align-items: center;
`;


export const ObsWrapper = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-top: 32px;
`;

export const ObsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.brand_dk};
`;

export const ObsText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray700};
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ButtonConfirm = styled.View`
  width: 100%;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 32px;
`;

export const ModalConfirmation = styled.Modal`
`;
export const ModalBackground = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.View`
    width: ${RFPercentage(36)}px;
    height: ${RFPercentage(28)}px;
    border-radius: 8px;
    padding: 32px 16px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray50};
`;

export const ModalButtonWrapper = styled.View`
    flex: 1;
    justify-content: space-between;
    padding-top: 32px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.gray700};
`;

export const Footer = styled.View`
  width: 100%;
  height: 72px;
`;
