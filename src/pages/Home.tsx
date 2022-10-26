import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  Layout,
  RequestHandler,
  SearchIcon,
  SearchList,
  TextInput,
  UserReposList,
} from '../components';
import { useBenificiarysQuery } from '../hooks';

export const Home = () => {
  const [inputText, setInputText] = React.useState('');
  const [mainInputText, setMainInputText] = React.useState(inputText);
  const [searchHistoryList, setSearchHistoryList] = React.useState<Array<string>>([]);

  const onChangeText = (text: string) => setInputText(text);

  const { data, isLoading, error, status } = useBenificiarysQuery(mainInputText);

  const ClickButton = () => {
    setMainInputText(inputText);
    setSearchHistoryList((prevList) => {
      const newList = [...prevList];
      searchHistoryList.length >= 5 && newList.pop();
      newList.unshift(inputText);
      return newList;
    });
  };

  const onClickHistoryItem = React.useCallback((text: string) => {
    setMainInputText(text);
  }, []);

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
        <SearchList list={searchHistoryList} onClickItem={onClickHistoryItem} />
        <View style={styles.listContainer}>
          <RequestHandler
            data={status === 'error' ? data : []}
            loading={isLoading}
            emptyDataText={'This user was not found'}
            error={error as { message: string }}
          >
            <UserReposList data={data} />
          </RequestHandler>
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
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    paddingBottom: 20,
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
