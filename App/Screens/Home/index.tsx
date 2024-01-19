import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {
  AppStackScreenProps,
  HomeStackScreenProps,
} from '../../Navigation/types';
import {HeaderApp} from '../../Component';
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
