import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, IMAGE, THEME} from '../Common';
import Device from '../Common/Device';
import HeadingApp from './HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BtnIconApp} from '.';
import {SIZES} from '../Common/AppTheme';

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
      <View style={styles.leftBoxStyle}>
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
    height: 70,
    paddingHorizontal: THEME.SIZES.subHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: THEME.SIZES.subHorizontal,
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
  leftBoxStyle: {},
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    //: THEME.SIZES.subHorizontal,
    color: COLORS.primary,
  },
});
