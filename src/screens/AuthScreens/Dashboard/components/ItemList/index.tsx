import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import * as S from './styles';

type ItemData = {
  id: number;
  title: string;
  value: number;
  type: string;
  company: string;
  date: string;
  description: string;
};

type Props = {
  items: ItemData;
};

export const ItemList: React.FC<Props> = ({ items }) => {
  function handleImage() {
    switch (items.company) {
      case 'Pagar.me':
        return (
          <S.IconBox
            source={require('../../../../../assets/logos/pagarme.png')}
          />
        );

      case 'Juno':
        return (
          <S.IconBox source={require('../../../../../assets/logos/juno.png')} />
        );

      case 'Santander':
        return (
          <S.IconBox
            source={require('../../../../../assets/logos/santander.png')}
          />
        );

      case 'Banco-do-Brasil':
        return (
          <S.IconBox
            source={require('../../../../../assets/logos/banco-do-brasil.png')}
          />
        );

      default:
        return (
          <S.IconBox
            source={require('../../../../../assets/logos/pagseguro.png')}
          />
        );
    }
  }

  return (
    <TouchableOpacity>
      <S.BoxItem key={items.id}>
        {handleImage()}
        <View style={{ paddingBottom: 20 }}>
          <S.TitleBox>{items.title}</S.TitleBox>
          <S.DescriptionText>{items.description}</S.DescriptionText>
        </View>
        <S.ValueTransfer>R$ {items.value}</S.ValueTransfer>
        <S.TypeTransfer type={items.type}>
          {items.type == 'debit' ? 'Debito' : 'Credito'}
        </S.TypeTransfer>
      </S.BoxItem>
    </TouchableOpacity>
  );
};
