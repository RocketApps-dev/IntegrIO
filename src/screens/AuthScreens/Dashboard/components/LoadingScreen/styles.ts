import styled from 'styled-components/native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { ViewStyle } from 'react-native';

export const BoxItemList = styled.View`
  width: 95%;
  height: 80px;

  flex-direction: row;

  padding-left: 10px;
`;

export const ShimmerEffect = styled(ShimmerPlaceHolder).attrs({})`
  margin-right: 20px;
`;

export const ImageShimmer: ViewStyle = {
  borderRadius: 10,
  width: 60,
  height: 60,
};

export const TitleShimmer: ViewStyle = {
  borderRadius: 10,
};

export const SubTitleShimmer: ViewStyle = {
  borderRadius: 10,
  marginTop: 10,

  width: 150,
};

export const ValueShimmer: ViewStyle = {
  borderRadius: 10,

  position: 'absolute',
  right: 10,
  bottom: 20,

  width: 80,
};
