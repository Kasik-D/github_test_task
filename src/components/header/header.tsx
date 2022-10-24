/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  title?: string;
};

export const Header = ({ title = 'GitHub user search app' }: Props) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../../assets/requestum.png')} />
      {title && <Text style={style.textTitle}>{title}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary[400],
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  textTitle: {
    color: colors.secondary[400],
    fontSize: 14,
  },
});
