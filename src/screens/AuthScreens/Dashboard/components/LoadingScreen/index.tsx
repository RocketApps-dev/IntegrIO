import React from 'react';
import { Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import * as S from './styles';

export const LoadingScreen: React.FC = () => {
  const repeatNumber = 5;

  return (
    <>
      {Array.from({ length: repeatNumber }).map((_, index) => (
        <S.BoxItemList key={index} >
          <S.ShimmerEffect
            LinearGradient={LinearGradient}
            style={S.ImageShimmer}
          />
          <View>
            <S.ShimmerEffect
              LinearGradient={LinearGradient}
              style={S.TitleShimmer}
            />
            <S.ShimmerEffect
              LinearGradient={LinearGradient}
              style={S.SubTitleShimmer}
            />
          </View>
          <S.ShimmerEffect
            LinearGradient={LinearGradient}
            style={S.ValueShimmer}
          />
        </S.BoxItemList>
      ))}
    </>
  );
};
