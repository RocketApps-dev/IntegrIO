import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button, Input } from '../../../components';

import * as S from './styles';

export const SignUp: React.FC = () => {
  const { control } = useForm();

  const navigation = useNavigation();

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
        <Input
            control={control}
            name="userId"
            title="Digite seu nome"
            icon="user"
            iconType="Ent"
          />
          <View style={{ height: 20 }} />
          <Input
            control={control}
            name="userId"
            title="Digite seu email"
            icon="email"
            iconType="Ent"
          />
          <View style={{ height: 20 }} />
          <Input
            control={control}
            icon="eye-off"
            iconType="Fea"
            name="password"
            title="Digite sua senha"
            isSecureText={true}
          />
        </S.ContainerInputs>

        <S.ContainerBottom>
          <Button title="Criar conta" onPress={() => {}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn' as never)}
            style={{ marginBottom: 10, marginTop: 5, flexDirection: 'row' }}>
            <S.TextBottom>Já possui uma conta? </S.TextBottom>
            <S.TextBottom style={{ color: '#000' }}>Entre</S.TextBottom>
          </TouchableOpacity>
          <S.TextBottom>Seus dados pessoais estão seguros conosco</S.TextBottom>
          <S.TextBottom>
            Read our Privacy Policy and Terms and Conditions
          </S.TextBottom>
        </S.ContainerBottom>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
