import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderApp} from '../../Component';
import {useNavigation} from '@react-navigation/native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      <HeaderApp navigation={navigation} RightComponent />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
