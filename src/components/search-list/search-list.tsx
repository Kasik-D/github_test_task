import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  list: Array<string>;
  onClickItem: (text: string) => void;
};

export const SearchList = ({ list, onClickItem }: Props) => {
  return (
    <View style={styles.searchHistoryContainer}>
      <Text style={styles.titleText}>Search history:</Text>
      {list?.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onClickItem(item)}>
            <Text style={styles.listItem}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  searchHistoryContainer: {
    marginTop: 15,
  },
  titleText: {
    color: '#fff',
    marginBottom: 10,
  },
});
