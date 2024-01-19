import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, IMAGE} from '../Common';
import Device from '../Common/Device';
import HeadingApp from './HeadingApp';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Iprops = {
  title?: string;
  Logo?: React.ComponentType;
  description?: string;
  description2?: string;
  hasBack?: boolean;
  RightComponent?: React.ComponentType;
  LeftComponent?: React.ComponentType;
  navigation: any;
  BottomComponent?: React.ComponentType;
};

const HeaderApp = ({
  title,
  Logo,
  description,
  description2,
  hasBack = false,
  RightComponent,
  LeftComponent,
  navigation,
  BottomComponent,
}: Iprops) => {
  const {top} = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        COLORS.blue[400],
        COLORS.blue[300],
        COLORS.blue[200],
        COLORS.blue[100],
      ]}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      style={styles.container}>
      <View style={[styles.header, {paddingTop: top + 17}]}>
        <View style={styles.leftSection}>
          {hasBack ? (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={IMAGE.icons.arrowBack} style={styles.icon} />
            </Pressable>
          ) : (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={IMAGE.icons.menu} style={styles.icon} />
            </Pressable>
          )}
          {!!LeftComponent && <LeftComponent />}
        </View>

        {!!Logo ? (
          <Logo />
        ) : (
          title && (
            <HeadingApp strong_16 style={styles.title}>
              {title}
            </HeadingApp>
          )
        )}
        {!!RightComponent ? (
          <RightComponent />
        ) : (
          <View style={styles.rightComponent} />
        )}
      </View>
      {!!BottomComponent && <BottomComponent />}
      {!!description && (
        <View style={styles.containerDescription}>
          <HeadingApp numberOfLines={3} style={styles.description}>
            {description}
          </HeadingApp>
          {!!description2 && (
            <HeadingApp mid_16 numberOfLines={3} style={styles.description2}>
              {description2}
            </HeadingApp>
          )}
        </View>
      )}
    </LinearGradient>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    width: '100%',
  },
  flex: {flex: 1},
  header: {
    width: Device.width,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },

  leftSection: {
    gap: 10,
    flexDirection: 'row',
  },

  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.white,
  },
  containerDescription: {
    width: DEVICE.width - 100,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  description: {
    color: COLORS.white,
  },
  description2: {
    color: COLORS.white,
    fontWeight: '700',
  },
  rightComponent: {
    width: 24,
  },
});
