import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, IMAGE, THEME} from '../Common';
import Device from '../Common/Device';
import HeadingApp from './HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BtnIconApp} from '.';
import {useAppSelector} from '../Redux';

type Iprops = {
  title?: string;
  hasBack?: boolean;
  RightComponent?: boolean;
  navigation: any;
};

const HeaderApp = ({
  title,
  hasBack = false,
  RightComponent,
  navigation,
}: Iprops) => {
  const {top} = useSafeAreaInsets();
  const {favoriteData} = useAppSelector(state => state.favorite);
  return (
    <View style={[styles.header]}>
      <View>
        {hasBack ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={IMAGE.icons.arrowBack} style={styles.icon} />
          </Pressable>
        ) : (
          <Image style={styles.logo} source={IMAGE.logo.mainLogo} />
        )}
      </View>

      {title && (
        <View style={styles.titleContainer}>
          <HeadingApp strong_16 style={styles.title}>
            {title}
          </HeadingApp>
        </View>
      )}
      {RightComponent && (
        <View>
          <View style={styles.favCountBox}>
            <HeadingApp style={styles.favCount}>
              {favoriteData.length}
            </HeadingApp>
          </View>
          <BtnIconApp
            onPress={() => navigation.navigate('FavoriteScreen')}
            source={IMAGE.icons.heart}
            width={23}
            height={23}
          />
        </View>
      )}
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  header: {
    width: Device.width,
    height: 70,
    paddingHorizontal: THEME.SIZES.subHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: THEME.SIZES.subHorizontal,
    borderBottomColor: COLORS.gray[300],
    borderBottomWidth: 1,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    //: THEME.SIZES.subHorizontal,
    color: COLORS.primary,
  },
  favCountBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: -10,
    right: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favCount: {
    color: COLORS.white,
  },
});
