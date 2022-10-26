import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type Props = {
  repoName: string;
  repoLanguage: string;
  repoDescription: string;
};

export const RepostListItem = ({ repoName, repoLanguage, repoDescription }: Props) => {
  return (
    <View style={styles.contentContainerStyle}>
      <Text style={styles.repoNameText}>{repoName}</Text>
      <View style={styles.flexContainer}>
        <Text style={styles.languageText}>language: </Text>
        <Text style={styles.strongText}>{repoLanguage || 'not specified'}</Text>
      </View>
      <View style={styles.flexContainer}>
        <Text>description: </Text>
        <Text style={styles.strongText}>{repoDescription || 'not specified'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  flexContainer: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageText: {
    marginBottom: 10,
  },
  repoNameText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  strongText: {
    fontWeight: '600',
  },
});
