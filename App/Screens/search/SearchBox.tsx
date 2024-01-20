import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BtnIconApp, InputApp} from '../../Component';
import {COLORS, IMAGE, THEME} from '../../Common';

type propsType = {
  onPressSearch: (txt: string) => void;
};

const SearchBox = ({onPressSearch}: propsType) => {
  const [searchTxt, setSearchTxt] = useState<string>('');

  return (
    <View style={[styles.searchBox]}>
      <InputApp
        value={searchTxt}
        onChangeText={setSearchTxt}
        placeholder="Search ..."
        RightComponent={() => {
          return (
            <BtnIconApp
              width={25}
              height={25}
              imgStyle={styles.searchIcon}
              source={IMAGE.icons.search}
              onPress={() => onPressSearch(searchTxt)}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.gray[300],
    borderBottomWidth: 1,
    backgroundColor: COLORS.white,
  },
  searchIcon: {
    tintColor: COLORS.primary,
  },
});
