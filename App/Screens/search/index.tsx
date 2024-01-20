import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {AppStackScreenProps} from '../../Navigation/types';
import SearchBox from './SearchBox';
import {HeaderApp, LoadingApp} from '../../Component';
import {useAppDispatch} from '../../Redux';
import {searchAction} from '../../Redux/slices/App/AppSlice';
import {GIPHY_TOKEN} from '@env';
import {useSearch} from '../../hooks';
import List from './List';
export const SearchScreen: FC<AppStackScreenProps<'searchScreen'>> = ({
  navigation,
}) => {
  const {loadingMore, loading, searchResult, search, onEndReached} = useSearch({
    onSuccess: () => {},
    onError: () => {},
  });

  return (
    <View style={styles.container}>
      <HeaderApp navigation={navigation} />
      <SearchBox onPressSearch={txt => search(txt)} />
      <List
        loading={loading}
        loadingMore={loadingMore}
        data={searchResult}
        onEndReached={() => search('', true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
