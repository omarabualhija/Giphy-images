import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {
  AppStackScreenProps,
  HomeStackScreenProps,
} from '../../Navigation/types';
import {useAppDispatch, useAppSelector} from '../../Redux';
import {BtnIconApp, CardApp, HeaderApp} from '../../Component';
import {FlatList} from 'react-native-gesture-handler';
import {deleteAllFavoriteAction} from '../../Redux/slices/Favorite/favoriteSlice';
import {COLORS, IMAGE, THEME} from '../../Common';

export const FavoriteScreen: FC<HomeStackScreenProps<'FavoriteScreen'>> = ({
  navigation,
}) => {
  const {favoriteData} = useAppSelector(state => state.favorite);
  const dispatch = useAppDispatch();

  const deleteAll = () => {
    Alert.alert(
      'warning',
      'Are you sure you want to delete all your favorite gifs?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteAllFavoriteAction()),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <HeaderApp
        navigation={navigation}
        hasBack
        title={`My Favorite . (${favoriteData.length})`}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={favoriteData}
        renderItem={props => {
          return (
            <CardApp
              {...props}
              onPress={() => navigation.navigate('DetailsScreen', props.item)}
            />
          );
        }}
      />
      <View>
        <BtnIconApp
          style={styles.removeAllBox}
          width={25}
          height={25}
          source={IMAGE.icons.trash}
          onPress={() => deleteAll()}
          imgStyle={styles.removeAllIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  removeAllBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
    width: 50,
    height: 50,
    ...THEME.SHADOW,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeAllIcon: {tintColor: COLORS.red[500]},
});
