import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.gray50};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.brand_dk};
  margin-left: -32px;
`;

export const IconWrapper = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    right: ${RFPercentage(18)}px;
`;
