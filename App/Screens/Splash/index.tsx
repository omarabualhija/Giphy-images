import {StyleSheet, View} from 'react-native';
import React from 'react';

import {RootStackScreenProps} from '../../Navigation/types';
import {DEVICE} from '../../Common';
import LinearGradient from 'react-native-linear-gradient';

export const SplashScreen: React.FC<RootStackScreenProps<'SplashScreen'>> = ({
  navigation,
}) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.logoContainer}>
          {/* <Image source={IMAGE.Logos.transparentLogo} style={styles.logo} /> */}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  logo: {
    resizeMode: 'contain',
    width: DEVICE.width / 2,
    height: DEVICE.width / 2,
  },
});
