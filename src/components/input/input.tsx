/* eslint-disable unicorn/prefer-module */
import React from 'react';
import { StyleSheet, TextInput as TextInputRN } from 'react-native';

type Props = {
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
};

export const TextInput = ({ value = '', onChangeText }: Props) => {
  return <TextInputRN style={styles.input} value={value} onChangeText={onChangeText} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 50,
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
  },
});
