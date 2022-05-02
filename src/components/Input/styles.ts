import styled from 'styled-components/native';

export const BoxInput = styled.View`
  width: 336px;
  height: 43px;

  background: #edefff;
  border-radius: 15px;

  margin-top: 10px;

  padding-left: 10px;

  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -0.333333px;

  color: #616161;
`;

export const InputArea = styled.TextInput`
  /* margin-left: 50px; */

  width: 175px;

  font-family: 'Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.333333px;

  color: rgba(97, 97, 97, 0.71);
`;

export const ContainerIcon = styled.TouchableOpacity`
  height: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;
  right: 10px;
`;
