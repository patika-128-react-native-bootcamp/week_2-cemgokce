import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from './Item/Item';

const ItemsComponent = ({Items}) => {
  useEffect(() => {
    console.log('UseEffect First Item Log' + Items[0].name);
  }, [Items]);

  return (
    <View>
      <FlatList
        data={Items}
        renderItem={value => {
          return <Item ItemValue={value} />;
        }}
      />
    </View>
  );
};
export default ItemsComponent;
