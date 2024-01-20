import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenProps} from '../../Navigation/types';
import {DEVICE, THEME} from '../../Common';
import {BtnApp, HeaderApp} from '../../Component';
import {useAppDispatch} from '../../Redux';
import {deleteAllFavoriteAction} from '../../Redux/slices/Favorite/favoriteSlice';

export const DetailsScreen: FC<RootStackScreenProps<'DetailsScreen'>> = ({
  navigation,
  route,
}) => {
  const data = route.params;

  return (
    <View>
      <HeaderApp hasBack navigation={navigation} title={data.title} />
      <View>
        <Image source={{uri: data.images.original.url}} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: DEVICE.width - THEME.SIZES.subHorizontal,
    height: DEVICE.width - THEME.SIZES.subHorizontal,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
