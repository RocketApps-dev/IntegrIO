import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const ContainerPage = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  align-items: center;
`;

export const BoxButtons = styled.View`
  width: 100%;

  align-items: center;
`;

export const MoneyTransferButtonBox = styled.View`
  width: 100%;

  align-items: center;
`;

export const TitleTransferBox = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;

  position: absolute;

  left: 10px;
`;

export const ContainerList = styled.View`
  width: 100%;
  height: 500px;

  align-items: center;

  margin-top: 10px;
`;
