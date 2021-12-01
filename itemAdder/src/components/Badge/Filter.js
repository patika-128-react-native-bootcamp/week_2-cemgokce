import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Filter.style';

const Filter = ({Items, setItems, setFilterType}) => {
  const FilteredData =
    (type = 'date') =>
    () => {
      
      setFilterType(type);
      switch (type) {
        case 'date':
          setItems(Items.sort((a, b) => a.date - b.date));
          break;
        case 'ascending':
          setItems(Items.sort((a, b) => a.price - b.price));
          break;
        case 'descending':
          setItems(Items.sort((a, b) => b.price - a.price));
          break;
      }
    };
  return (
    <View style={styles.filter_view}>
      <Button
        onPress={FilteredData('ascending')}
        title="Artan Fiyat"
        style={styles.text}
      />

      <Button
        onPress={FilteredData('descending')}
        title="Azalan Fiyat"
        style={styles.text}
      />

      <Button
        onPress={FilteredData('date')}
        title="Tarih"
        style={styles.text}
      />
    </View>
  );
};
export default Filter;
