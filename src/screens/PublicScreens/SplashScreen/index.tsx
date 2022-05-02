import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export const SplashScreen: React.FC = () => {
  return (
    <S.Container>
      <S.LogoImage source={require('../../../assets/logo.png')} />

      <View style={{ height: '40%' }} />
      <S.SubTitle>Seu parceiro de pagamento perfeito</S.SubTitle>
    </S.Container>
  );
};
