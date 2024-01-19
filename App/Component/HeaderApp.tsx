import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, IMAGE, THEME} from '../Common';
import Device from '../Common/Device';
import HeadingApp from './HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BtnIconApp} from '.';

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

  return (
    <View
      style={[styles.header, {paddingTop: top + THEME.SIZES.subHorizontal}]}>
      <View style={{}}>
        {hasBack ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={IMAGE.icons.arrowBack} style={styles.icon} />
          </Pressable>
        ) : (
          <Image style={styles.logo} source={IMAGE.logo.mainLogo} />
        )}
      </View>

      {title && (
        <HeadingApp strong_16 style={styles.title}>
          {title}
        </HeadingApp>
      )}
      {RightComponent && (
        <BtnIconApp
          onPress={() => navigation.navigate('FavoriteScreen')}
          source={IMAGE.icons.heart}
          width={23}
          height={23}
        />
      )}
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  header: {
    width: Device.width,
    paddingHorizontal: THEME.SIZES.subHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  title: {
    color: COLORS.white,
  },
});
