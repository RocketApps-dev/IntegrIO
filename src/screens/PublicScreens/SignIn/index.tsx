import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useForm } from 'react-hook-form';

import { Button, Input } from '../../../components';

import * as S from './styles';

export const SignIn: React.FC = () => {
  const { handleSubmit, control } = useForm();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <S.Container>
        <S.ContainerBackground
          source={require('../../../assets/background.png')}
          resizeMode="cover"
        />
        <S.LogoImg source={require('../../../assets/logo2.png')} />
        <S.ContainerInputs>
          <Input control={control} name="userId" title="Digite seu ID" />
          <View style={{ height: 20 }} />
          <Input
            control={control}
            icon="eye-off"
            iconType="Fea"
            name="password"
            title="Digite seu ID"
            isSecureText={true}
          />
        </S.ContainerInputs>

        <S.ContainerBottom>
          <Button title="Acessar" onPress={() => {}} />
          <S.TextBottom>Seus dados pessoais estão seguros conosco</S.TextBottom>
          <S.TextBottom>
            Read our Privacy Policy and Terms and Conditions
          </S.TextBottom>
        </S.ContainerBottom>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
