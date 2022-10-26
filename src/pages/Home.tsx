import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Layout, SearchIcon, TextInput, UserReposList } from '../components';
import { useBenificiarysQuery } from '../hooks';
import { colors } from '../theme';

export const Home = () => {
  const [inputText, setInputText] = React.useState('');
  const [mainInputText, setMainInputText] = React.useState(inputText);

  const onChangeText = (text: string) => setInputText(text);

  const { refetch, data, isLoading, isRefetching } = useBenificiarysQuery(mainInputText);

  const ClickButton = () => {
    setMainInputText(inputText);
  };

  return (
    <Layout>
      <View style={styles.wrapper}>
        <View style={styles.divider} />
        <View style={styles.flexContainer}>
          <TextInput value={inputText} onChangeText={onChangeText} />
          <TouchableOpacity
            onPress={ClickButton}
            activeOpacity={0.7}
            style={styles.searchIconContainer}
          >
            <SearchIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.searchHistoryContainer}>
          <Text
            style={{
              color: '#fff',
            }}
          >
            Search history:
          </Text>
        </View>
        <View style={styles.listContainer}>
          <UserReposList data={data} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#525554',
    height: 1,
    marginBottom: 15,
    width: '100%',
  },
  flexContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 20,
  },
  searchHistoryContainer: {
    marginTop: 15,
  },
  searchIconContainer: {
    display: 'flex',
    flex: 0.1,
    marginLeft: 10,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
});
