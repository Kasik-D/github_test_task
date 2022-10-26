import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RepostListItem } from './repos-list-item/repos-list-item';

export const UserReposList = ({ data }: any) => {
  const renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <RepostListItem
        repoDescription={item?.description || ''}
        repoLanguage={item?.language}
        repoName={item?.name}
      />
    ),
    [],
  );

  const keyExtractor = React.useCallback(
    (item: any, index: number) => (item?.id || index).toString(),
    [],
  );

  return (
    <FlatList
      data={data || []}
      style={styles.contentContainerStyle}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
