import styled from 'styled-components/native';

export const ButtonBox = styled.TouchableOpacity`
  margin-top: 10px;

  height: 50px;

  flex-direction: row;
`;

export const ImageButton = styled.View`
  width: 40px;
  height: 40px;

  background-color: rgba(0, 210, 210, 0.15);

  border-radius: 5px;

  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  width: 150px;
  height: 35px;

  padding-top: 5px;
`;

export const TextButton = styled.Text`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  text-align: center;
  letter-spacing: -0.333333px;

  color: #616161;
`;
