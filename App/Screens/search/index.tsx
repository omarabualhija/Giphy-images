import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppStackScreenProps} from '../../Navigation/types';

export const SearchScreen: FC<AppStackScreenProps<'searchScreen'>> = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
