import React, { useEffect } from 'react';

import { FlatList, View } from 'react-native';

import { Header } from '../../../components';
import { TopButtons } from './components/TopButtons';
import { LoadingScreen } from './components/LoadingScreen';

import * as S from './styles';
import { ItemList } from './components/ItemList';

const data = [
  {
    id: 1,
    title: 'Pagar.me',
    value: 500.99,
    type: 'credit',
    company: 'Pagar.me',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
  {
    id: 2,
    title: 'Juno',
    value: 500.99,
    type: 'credit',
    company: 'Juno',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
  {
    id: 3,
    title: 'Pagseguro',
    value: 500.99,
    type: 'debit',
    company: 'Pagseguro',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
  {
    id: 4,
    title: 'Santander',
    value: 500.99,
    type: 'debit',
    company: 'Santander',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
  {
    id: 5,
    title: 'Banco do Brasil',
    value: 500.99,
    type: 'debit',
    company: 'Banco-do-Brasil',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
  {
    id: 6,
    title: 'Juno',
    value: 500.99,
    type: 'credit',
    company: 'Juno',
    date: '10/10/2020',
    description: 'Pagamento de conta',
  },
];

export const Dashboard: React.FC = () => {
  const [inLoading, setInLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInLoading(false);
    }, 2000);
  }, []);

  return (
    <S.ContainerPage>
      <Header />

      <S.BoxButtons>
        <S.MoneyTransferButtonBox>
          <S.TitleTransferBox>Menu Principal</S.TitleTransferBox>

          <View style={{ height: 30 }} />
          <TopButtons />
        </S.MoneyTransferButtonBox>
      </S.BoxButtons>

      <S.ContainerList>
        <S.TitleTransferBox>Relatório Financeiro</S.TitleTransferBox>

        <View style={{ height: 35 }} />
        {inLoading ? (
          <LoadingScreen />
        ) : (
          <FlatList
            style={{ width: '100%', marginLeft: 20 }}
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ItemList key={item.id} items={item} />}
          />
        )}
      </S.ContainerList>
    </S.ContainerPage>
  );
};
