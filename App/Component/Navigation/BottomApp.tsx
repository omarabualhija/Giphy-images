import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import HeadingApp from '../HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, IMAGE} from '../../Common';

const BottomApp: React.FC<any> = ({state, descriptors, navigation, user}) => {
  const {top, bottom} = useSafeAreaInsets();
  let arr = [
    {
      id: 1,
      name: 'Home',
      color: COLORS.gray,
    },
    {
      id: 2,
      name: 'search',

      color: COLORS.gray,
    },
    {
      id: 3,
      name: 'favourite',
      color: COLORS.gray,
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {height: 60 + bottom, paddingVertical: bottom},
      ]}>
      {arr.map((_: any, index: number) => {
        let route = state.routes[index];
        const isFocused = state.index === index;
        const onPress = (index: number) => {
          var event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            const _params = index == 1 ? {id: '', type: ''} : {};
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true}, _params);
          }
        };

        return (
          <TouchableOpacity
            touchSoundDisabled={false}
            onPress={() => onPress(index)}
            key={arr[index].id}
            style={styles.btnBox}>
            {/* TODO: just import your image from the IMAGE folder */}
            {/* <Image
              source={
              }
              style={styles.img}
            /> */}
            <HeadingApp style={styles.txt}>{arr[index].name}</HeadingApp>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomApp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
