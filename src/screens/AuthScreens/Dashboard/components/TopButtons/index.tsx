import React from 'react';
import { RectangleButton } from '../../../../../components';

import * as S from './styles';

export const TopButtons: React.FC = () => {
  return (
    <>
      <S.RowButtons>
        <RectangleButton icon="security" title="Autentificação" typeIcon="Mt" />
        <RectangleButton icon="finance" title="Transações" typeIcon="Mt" />
      </S.RowButtons>
      <S.RowButtons>
        <RectangleButton icon="bank" title="Integradores" typeIcon="Mt" />
        <RectangleButton icon="refresh" title="Self Transfer" typeIcon="Evil" />
      </S.RowButtons>
    </>
  );
};
