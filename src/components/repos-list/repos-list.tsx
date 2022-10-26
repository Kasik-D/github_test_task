import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RepostListItem } from './repos-list-item/repos-list-item';

interface Item {
  [name: string]: string;
}

interface Props {
  data: Array<Item>;
}

export const UserReposList = ({ data }: Props) => {
  const renderItem = React.useCallback(
    ({ item }: { item: Item }) => (
      <RepostListItem
        repoDescription={item?.description || ''}
        repoLanguage={item?.language}
        repoName={item?.name}
      />
    ),
    [],
  );

  const keyExtractor = React.useCallback(
    (item: Item, index: number) => (item?.id || index).toString(),
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
