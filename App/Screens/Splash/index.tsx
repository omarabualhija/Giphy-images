import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {RootStackScreenProps} from '../../Navigation/types';
import {COLORS, DEVICE} from '../../Common';
import LinearGradient from 'react-native-linear-gradient';

export const SplashScreen: React.FC<RootStackScreenProps<'SplashScreen'>> = ({
  navigation,
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SigninScreen');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.logoContainer}>
          <ActivityIndicator size="large" color="#fff" />
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
