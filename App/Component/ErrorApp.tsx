import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeadingApp} from '.';

const ErrorApp = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <HeadingApp strong_16>somthing went worng ...</HeadingApp>
    </View>
  );
};

export default ErrorApp;

const styles = StyleSheet.create({});
