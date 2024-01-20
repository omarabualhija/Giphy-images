import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {
  AppStackScreenProps,
  HomeStackScreenProps,
} from '../../Navigation/types';

export const FavoriteScreen: FC<
  HomeStackScreenProps<'FavoriteScreen'>
> = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
