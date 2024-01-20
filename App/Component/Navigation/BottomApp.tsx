import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import HeadingApp from '../HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, IMAGE} from '../../Common';

type propsType = {
  focused: boolean;
  name: string;
  index: number;
  icon: any;
};

const BottomApp: React.FC<propsType> = ({focused, name, index, icon}) => {
  return (
    <View style={styles.btnBox}>
      {/* TODO: just import your image from the IMAGE folder */}
      <Image
        source={icon}
        style={[
          styles.img,
          {tintColor: !focused ? COLORS.gray[500] : COLORS.primary},
        ]}
      />
      <HeadingApp
        style={{
          ...styles.txt,
          color: !focused ? COLORS.gray[500] : COLORS.primary,
        }}>
        {name}
      </HeadingApp>
    </View>
  );
};

export default BottomApp;

const styles = StyleSheet.create({
  btnBox: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    flex: 1 / 4,
  },

  img: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  txt: {},
});
