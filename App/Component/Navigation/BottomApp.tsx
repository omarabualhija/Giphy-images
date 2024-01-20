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
      icon: IMAGE.icons.home,
    },
    {
      id: 2,
      name: 'search',
      icon: IMAGE.icons.search,
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          height: 65 + bottom,
          paddingVertical: bottom,
          justifyContent: 'space-around',
          alignItems: 'center',
        },
      ]}>
      {arr.map((item, index: number) => {
        let route = state.routes[index];
        console.log(route);
        const isFocused = state.index === index;
        const onPress = (index: number) => {
          var event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            touchSoundDisabled={false}
            onPress={() => onPress(index)}
            key={arr[index].id}
            style={styles.btnBox}>
            {/* TODO: just import your image from the IMAGE folder */}
            <Image source={item.icon} style={styles.img} />
            <HeadingApp style={styles.txt}>{item.name}</HeadingApp>
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
