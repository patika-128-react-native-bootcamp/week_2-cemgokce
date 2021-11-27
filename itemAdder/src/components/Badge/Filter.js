import React from 'react';
import {View, Text,Button} from 'react-native';
import styles from './Filter.style';

const Filter = () => {
  return (
    <View style={styles.filter_view}>
     
        <Button  title='Artan Fiyat' style={styles.text}></Button>
      
        <Button title='Azalan Fiyat' style={styles.text}></Button>
      
        <Button title='Tarih' style={styles.text}></Button>
     
    </View>
  );
};
export default Filter;
