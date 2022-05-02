import styled from 'styled-components/native';
import { AppColors } from '../../../../../global/constants/AppColors';

export const BoxItem = styled.View`
  width: 95%;
  height: 85px;

  flex-direction: row;

  margin-top: 10px;
  padding-left: 10px;

  align-items: center;
`;

export const IconBox = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 10px;

  background-color: rgba(0, 210, 210, 0.15);

  margin-right: 10px;
`;

export const TitleBox = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.333333px;

  color: #616161;

  opacity: 0.8;
`;

export const DescriptionText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.333333px;

  color: #616161;

  opacity: 0.8;
`;

export const ValueTransfer = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.333333px;

  color: #616161;

  opacity: 0.8;

  position: absolute;
  right: 20px;
  bottom: 40px;
`;

type TypeTransferProps = {
  type?: string;
};

export const TypeTransfer = styled.Text<TypeTransferProps>`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.333333px;

  color: ${props => (props.type === 'debit' ? 'green' : 'red')};

  opacity: 0.8;

  position: absolute;
  right: 20px;
  bottom: 20px;
`;
