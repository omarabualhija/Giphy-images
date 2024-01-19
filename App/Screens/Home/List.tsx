import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {CardApp} from '../../Component';

const List = () => {
  return (
    <Animated.FlatList
      keyExtractor={(_, index) => index.toString()}
      data={[]}
      renderItem={props => <CardApp {...props} />}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
