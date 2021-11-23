import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    label: string;
    type?: string;
}

const Button: React.FC<ButtonProps> = ({onPress, label, type}) => {
  return (
      <S.Container onPress={onPress}>
          <S.Label>{label}</S.Label>
      </S.Container>
  );
}

export default Button;