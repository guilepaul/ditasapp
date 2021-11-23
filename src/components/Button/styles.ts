import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(40)}px;
  height: 50px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({theme}) => theme.colors.funnel};

  box-shadow: 1px 2px 14px rgba(129, 187, 7, 0.6);
  elevation: 5;
`;
export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.white};
`;
