import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';
import {CardApp, LoadingApp} from '../../Component';
import {useAppDispatch, useAppSelector} from '../../Redux';
import {getHomeDataAction} from '../../Redux/slices/App/AppSlice';
import {GIPHY_TOKEN} from '@env';
import {THEME} from '../../Common';
import {useNavigation} from '@react-navigation/native';
const List = () => {
  const {
    nextOffset,
    errorHomeData,
    homeData,
    loadingHomeData,
    total_count,
    count,
    loadingMoreHomeData,
  } = useAppSelector(state => state.App);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    var propmise = dispatch(
      getHomeDataAction({
        api_key: GIPHY_TOKEN,
        limit: count,
        offset: nextOffset,
      }),
    );

    return () => {
      propmise.abort();
    };
  }, []);

  if (loadingHomeData) return <LoadingApp />;

  return (
    <Animated.FlatList
      style={{flex: 1}}
      removeClippedSubviews={true}
      progressViewOffset={100}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.contantContainerStyle}
      keyExtractor={(_, index) => index.toString()}
      data={homeData}
      ListFooterComponent={() => {
        return loadingMoreHomeData && <LoadingApp />;
      }}
      renderItem={props => (
        <CardApp
          {...props}
          onPress={() =>
            navigation.navigate('DetailsScreen', {
              ...props.item,
            })
          }
        />
      )}
      onEndReached={() => {
        if (nextOffset < total_count) {
          dispatch(
            getHomeDataAction({
              api_key: GIPHY_TOKEN,
              limit: count,
              offset: nextOffset,
            }),
          );
        }
      }}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  contantContainerStyle: {
    gap: THEME.SIZES.subVertical,
  },
});
