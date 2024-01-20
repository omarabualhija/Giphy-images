import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../Redux';
import {BtnIconApp} from '.';
import {COLORS, IMAGE} from '../Common';
import {toggleFavorite} from '../Redux/slices/Favorite/favoriteSlice';
type propsType = {
  item: imgObjType;
};

const FavoriteApp = ({item}: propsType) => {
  const isFav = useAppSelector(state =>
    state.favorite.favoriteData.some(fav => fav.id === item.id),
  );
  const dispatch = useAppDispatch();

  return (
    <BtnIconApp
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      {...styles.heartIcon}
      imgStyle={{
        tintColor: isFav ? COLORS.primary : COLORS.black,
      }}
      source={IMAGE.icons.heart}
      onPress={() => dispatch(toggleFavorite(item))}
    />
  );
};

export default FavoriteApp;

const styles = StyleSheet.create({
  heartIcon: {width: 30, height: 30},
});
