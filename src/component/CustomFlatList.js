import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const CustomFlatList = ({data, renderItem,type}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={type == 'horizontal' ? true : false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatlist}
      // {...props}
    />
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 15,
    paddingBottom: 15,
  },
});
