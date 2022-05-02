import React from 'react';

import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import MtIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import * as S from './styles';

type Props = {
  icon: string;
  title: string;
  typeIcon: 'Ant' | 'Ion' | 'Mt' | 'Evil';
};

export const RectangleButton: React.FC<Props> = ({ icon, title, typeIcon }) => {
  function handleIcon() {
    switch (typeIcon) {
      case 'Ant':
        return <AntIcons name={icon} size={24} color="#000" />;
      case 'Mt':
        return <MtIcons name={icon} size={24} color="#000" />;
      case 'Evil':
        return <EvilIcon name={icon} size={24} color="#000" />;
      default:
        return <IonIcons name={icon} size={24} color="#000" />;
    }
  }

  return (
    <>
      <S.ButtonBox>
        <S.ImageButton>{handleIcon()}</S.ImageButton>
        <S.ContainerText>
          <S.TextButton>{title}</S.TextButton>
        </S.ContainerText>
      </S.ButtonBox>
    </>
  );
};
