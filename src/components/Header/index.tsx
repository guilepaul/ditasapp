import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import * as S from './styles';

interface HeaderProps  {
    onPress?: () => void;
    title: string;
}

const Header: React.FC<HeaderProps> = ({
    onPress,
    title
}) => {

    const navigation = useNavigation();
  return (
      <S.Container>
            {onPress && <S.IconWrapper onPress={onPress}>
                <FontAwesome name='chevron-left' size={14} />
            </S.IconWrapper>}
          <S.Title>{title}</S.Title>
      </S.Container>
  );
}

export default Header;