import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 10%;

  flex-direction: row;
  align-items: center;

  padding-left: 10px;
`;

export const IconUserImage = styled.Image`
  width: 45px;
  height: 45px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;

  margin-left: 10px;
`;

export const ContainerIconBell = styled.TouchableOpacity`
  position: absolute;

  right: 20px;
`;
