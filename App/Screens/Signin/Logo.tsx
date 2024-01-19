import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeadingApp} from '../../Component';

const Logo = () => {
  return (
    <View style={styles.container}>
      <HeadingApp strong_16>Logo</HeadingApp>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
