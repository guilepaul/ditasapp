import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    label: string;
    type?: string;
    small?: boolean;
}

const Button: React.FC<ButtonProps> = ({onPress, label, type, small}) => {
  return (
      <S.Container type={type} small={small} onPress={onPress}>
          <S.Label type={type}>{label}</S.Label>
      </S.Container>
  );
}

export default Button;