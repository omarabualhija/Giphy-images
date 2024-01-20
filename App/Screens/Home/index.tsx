import {StyleSheet, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {HomeStackScreenProps} from '../../Navigation/types';
import Header from './Header';
import List from './List';
export const HomeScreen: FC<HomeStackScreenProps<'HomeScreen'>> = ({
  navigation,
}) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({});
