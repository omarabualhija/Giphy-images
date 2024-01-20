import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  Keyframe,
} from 'react-native-reanimated';
import {COLORS, DEVICE, IMAGE, THEME} from '../Common';
import {BtnIconApp, FavoriteApp, HeadingApp} from '.';
import {toggleFavorite} from '../Redux/slices/Favorite/favoriteSlice';
import {useAppDispatch, useAppSelector} from '../Redux';

type propsType = {
  item: imgObjType;
  index: number;
  onPress: () => void;
};

const Card: FC<propsType> = ({item, index, onPress}) => {
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <View style={styles.userInfoBox}>
        <Image source={{uri: item.user?.avatar_url}} style={styles.avaterImg} />
        <View style={{gap: 5}}>
          <HeadingApp strong_16>{item.user?.username}</HeadingApp>
          <HeadingApp normal_13>{item.user?.display_name}</HeadingApp>
        </View>
      </View>
      <Animated.Image
        sharedTransitionTag={`image-${item.title}`}
        defaultSource={IMAGE.icons.userplaceholder}
        source={{uri: `${item.images.original.url}.gif`}}
        style={[styles.image]}
      />
      <View style={styles.description}>
        <HeadingApp numberOfLines={3} strong_16 style={styles.descriptionTxt}>
          {item.title}
        </HeadingApp>

        <FavoriteApp item={item} />
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: DEVICE.width - THEME.SIZES.subHorizontal,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    gap: THEME.SIZES.subHorizontal,
    paddingVertical: THEME.SIZES.subHorizontal,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  userInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME.SIZES.subHorizontal,
    paddingHorizontal: THEME.SIZES.subHorizontal,
  },
  avaterImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: DEVICE.width - THEME.SIZES.subHorizontal,
    resizeMode: 'cover',
    backgroundColor: COLORS.red['100'],
  },
  description: {
    paddingHorizontal: THEME.SIZES.subHorizontal,
    flexDirection: 'row',
    flex: 1,
    gap: THEME.SIZES.subHorizontal,
  },
  descriptionTxt: {
    flex: 1,
    // marginRight:THEME.SIZES.subHorizontal,
  },
  heartIcon: {width: 30, height: 30},
});
