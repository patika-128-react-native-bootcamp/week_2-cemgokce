import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from './Item/Item';
import styles from './Items.style';

const ItemsComponent = ({Items}) => {
  const seperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={seperator}
        data={Items}
        renderItem={({item}) => {
          return <Item ItemValue={item} />;
        }}
      />
    </View>
  );
};
export default ItemsComponent;
