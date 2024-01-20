import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenProps} from '../../Navigation/types';
import {HeaderApp} from '../../Component';
import MainDetails from './MainDetails';
import Tabs from './Tabs';

export const DetailsScreen: FC<RootStackScreenProps<'DetailsScreen'>> = ({
  navigation,
  route,
}) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <HeaderApp hasBack navigation={navigation} title={data.title} />
      <MainDetails data={data} />
      <Tabs data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
