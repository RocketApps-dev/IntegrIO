import React from 'react';

import { View } from 'react-native';

import { Header, RectangleButton } from '../../../components';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  return (
    <S.ContainerPage>
      <Header />

      <S.BoxButtons>
        <S.MoneyTransferButtonBox>
          <S.TitleTransferBox>Menu Principal</S.TitleTransferBox>

          <View style={{ height: 30 }} />
          <S.RowButtons>
            <RectangleButton
              icon="security"
              title="Autentificação"
              typeIcon="Mt"
            />
            <RectangleButton icon="finance" title="Transações" typeIcon="Mt" />
          </S.RowButtons>
          <S.RowButtons>
            <RectangleButton
              icon="bank"
              title="Integradores"
              typeIcon="Mt"
            />
            <RectangleButton
              icon="refresh"
              title="Self Transfer"
              typeIcon="Evil"
            />
          </S.RowButtons>
        </S.MoneyTransferButtonBox>
      </S.BoxButtons>
    </S.ContainerPage>
  );
};
