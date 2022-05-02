import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ContainerBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;

  color: #4d5dfa;
`;

export const LogoImg = styled.Image`
  position: absolute;

  top: 50px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  height: 250px;

  margin-top: 10px;

  padding-bottom: 180px;

  justify-content: center;
  align-items: center;
`;

export const ContainerBottom = styled.View`
  width: 100%;

  align-items: center;

  position: absolute;
  bottom: 50px;
`;

export const TextBottom = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 19px; */
  text-align: center;
  letter-spacing: -0.333333px;

  color: #7c82ba;

  margin-top: 10px;
`;
