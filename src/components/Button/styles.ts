import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';

interface ButtonProps  {
  type?: string;
  small?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
${({theme, small}) => small ? 
    css`
    width: ${RFPercentage(22)}px;
    height: 40px;
    ` : 
    css`
    width: ${RFPercentage(40)}px;
    height: 50px;
    `}
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border-color: ${({theme, type}) => type === 'outline' ? theme.colors.brand : 'transparent'};
  border-width: ${({theme, type}) => type === 'outline' ? 2 : 0}px;

  ${({theme, type}) => 
  type !== 'outline' && css`box-shadow: 1px 2px 14px rgba(129, 187, 7, 0.6);`
}

  background-color: ${({theme, type}) => type === 'outline' ? theme.colors.gray50 : theme.colors.funnel};
  
  elevation: 5;
`;
export const Label = styled.Text<ButtonProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({theme, type}) => type === 'outline' ? theme.colors.gray700 : theme.colors.white};
`;
