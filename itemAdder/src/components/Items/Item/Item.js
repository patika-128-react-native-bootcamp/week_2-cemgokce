import React from 'react';
import {View, Text} from 'react-native';
import styles from './Item.style';

const Item = ({ItemValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ItemValue.name}</Text>
      <Text style={styles.price}>{ItemValue.price}</Text>
    </View>
  );
};
export default Item;
