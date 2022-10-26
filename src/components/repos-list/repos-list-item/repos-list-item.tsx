import React from 'react';
import { Text, View } from 'react-native';

export type Props = {
  repoName: string;
  repoLanguage: string;
  repoDescription: string;
};

export const RepostListItem = ({ repoName, repoLanguage, repoDescription }: Props) => {
  return (
    <View>
      <Text>{repoName}</Text>
      <Text>{repoLanguage}</Text>
      <Text>{repoDescription}</Text>
    </View>
  );
};
