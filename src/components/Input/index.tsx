import React, { useState } from 'react';

import { Controller, Control } from 'react-hook-form';

import FeaIcons from 'react-native-vector-icons/Feather';
import MatIcons from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

type Props = {
  title: string;
  name: string;
  icon?: string;
  control: Control;
  iconType?: 'Fea' | 'Mat';
  isSecureText?: boolean;
};

export const Input: React.FC<Props> = ({
  icon = 'content-paste',
  name,
  title,
  iconType,
  isSecureText = false,
  control,
}) => {
  const [showPassword, setShowPassword] = useState(isSecureText);
  const [iconEye, setIconEye] = useState(icon);

  function handleIcon() {
    switch (iconType) {
      case 'Fea':
        return <FeaIcons name={iconEye} size={24} color="#000" />;
      default:
        return <MatIcons name="content-paste" size={24} color="#000" />;
    }
  }

  function onPressIconButton() {
    if (isSecureText) {
      setShowPassword(!showPassword);
      setIconEye(showPassword ? 'eye' : 'eye-off');
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <S.BoxInput>
          <S.TextInput>{title}</S.TextInput>
          <S.InputArea
            onChange={onChange}
            value={value}
            secureTextEntry={showPassword}
          />
          <S.ContainerIcon onPress={onPressIconButton}>
            {handleIcon()}
          </S.ContainerIcon>
        </S.BoxInput>
      )}
    />
  );
};
