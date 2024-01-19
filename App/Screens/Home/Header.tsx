import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderApp} from '../../Component';
import {useNavigation} from '@react-navigation/native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const Header = () => {
  const navigation = useNavigation();

  const rHeaderStyle = useAnimatedStyle(() => {
    return {};
  });

  return (
    <Animated.View style={rHeaderStyle}>
      <HeaderApp navigation={navigation} RightComponent />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({});
