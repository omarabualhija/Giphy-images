import {
  FlatList,
  StyleSheet,
  Text,
  View,
  FlatListProps,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {THEME} from '../Common';
import {CardApp, LoadingApp} from '.';

interface iProps extends ListRenderItem<imgObjType> {
  loadingMore: boolean;
  nextOffset: number;
  total_count: number;
  onEndReached: () => void;
  data: imgObjType[];
}

const ListCard = (props: iProps) => {
  const {nextOffset, loadingMore, total_count, onEndReached, data} = props;
  return (
    <FlatList
      {...props}
      style={{flex: 1}}
      data={data}
      removeClippedSubviews={true}
      progressViewOffset={100}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.contantContainerStyle}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={() => {
        return loadingMore && <LoadingApp />;
      }}
      renderItem={props => <CardApp {...props} />}
      onEndReached={() => {
        if (nextOffset < total_count) {
          onEndReached();
        }
      }}
    />
  );
};

export default ListCard;

const styles = StyleSheet.create({
  contantContainerStyle: {
    gap: THEME.SIZES.subVertical,
  },
});
