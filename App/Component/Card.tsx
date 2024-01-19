import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

type propsType = {
  item: any;
  index: number;
};

const Card: FC<propsType> = ({item, index}) => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
