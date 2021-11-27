import React from 'react';
import {View, Text} from 'react-native';

const Item = ({ItemValue}) => {
  console.log(ItemValue.name);
  return (
    <View>
      <Text>{ItemValue.name}</Text>
      {/* <Text>{item.price}</Text> */}
    </View>
  );
};
export default Item;
