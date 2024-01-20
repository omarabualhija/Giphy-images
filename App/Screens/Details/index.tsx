import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenProps} from '../../Navigation/types';
import {DEVICE, IMAGE, THEME} from '../../Common';
import {
  BtnApp,
  BtnIconApp,
  FavoriteApp,
  HeaderApp,
  HeadingApp,
} from '../../Component';
import {useAppDispatch, useAppSelector} from '../../Redux';
import {
  deleteAllFavoriteAction,
  toggleFavorite,
} from '../../Redux/slices/Favorite/favoriteSlice';
import MainDetails from './MainDetails';
import Tabs from './Tabs';

export const DetailsScreen: FC<RootStackScreenProps<'DetailsScreen'>> = ({
  navigation,
  route,
}) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <HeaderApp hasBack navigation={navigation} title={data.title} />
      <MainDetails data={data} />
      <Tabs data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
