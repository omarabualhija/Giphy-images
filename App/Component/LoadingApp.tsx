import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../Common';

const LoadingApp = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.blue[500]} />
    </View>
  );
};

export default LoadingApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
