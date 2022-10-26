import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

type Props = {
  loading: boolean;
  error?: Error | { message: string };
  children: React.ReactElement;
  data: unknown;
  emptyDataText: string;
};

export const RequestHandler = ({ loading, error, data, children, emptyDataText }: Props) => {
  if (loading) {
    return (
      <View style={styles.contentContainerStyle}>
        <ActivityIndicator color='#ffffff' size={'large'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.contentContainerStyle}>
        <Text style={styles.text}>{error?.message || 'Unknow error'}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.contentContainerStyle}>
        <Text style={styles.text}>{emptyDataText}</Text>
      </View>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#FF0000',
    fontSize: 22,
    fontWeight: '600',
  },
});
