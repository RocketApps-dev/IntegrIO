import React from 'react';
import { TouchableOpacity } from 'react-native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAuth, UserProps } from '../../contexts/AuthContext';
import { AppColors } from '../../global/constants/AppColors';

import * as S from './styles';

export const Header: React.FC = () => {
  const { user } = useAuth();

  const userdata = user as UserProps;

  const isMessage = true;

  return (
    <S.ContainerHeader>
      <TouchableOpacity>
        <S.IconUserImage
          source={require('../../assets/images/image-user-icon.png')}
        />
      </TouchableOpacity>

      <S.UserName>{user ? userdata.name : 'Usuário Developer'}</S.UserName>

      <S.ContainerIconBell>
        <MCIcon
          name={isMessage ? 'bell-alert' : 'bell'}
          size={30}
          color={isMessage ? AppColors.primary : '#000'}
        />
      </S.ContainerIconBell>
    </S.ContainerHeader>
  );
};
