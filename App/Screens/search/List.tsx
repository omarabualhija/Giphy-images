import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {CardApp, LoadingApp} from '../../Component';

type propsType = {
  data: imgObjType[];
  loading: boolean;
  loadingMore: boolean;
  onEndReached: () => void;
};

const List = ({data, loading, loadingMore, onEndReached}: propsType) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingApp />
      ) : (
        <FlatList
          removeClippedSubviews={true}
          progressViewOffset={100}
          onEndReachedThreshold={0.5}
          keyExtractor={(_, index) => index.toString()}
          data={data}
          renderItem={props => {
            return <CardApp {...props} />;
          }}
          ListFooterComponent={() => {
            return loadingMore ? <LoadingApp /> : null;
          }}
          onEndReached={onEndReached}
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
