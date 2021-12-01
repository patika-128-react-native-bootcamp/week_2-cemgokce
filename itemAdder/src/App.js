import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Filter from './components/Badge/Filter';
import ItemsComponent from './components/Items/ItemsComponent';
import ItemAdd from './components/ItemAdd/ItemAdd';

const App = () => {
  const [Items, setItems] = useState([]);
  const [FilterType, setFilterType] = useState('date');

  useEffect(() => {
    switch (FilterType) {
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
  }, [Items]);
  return (
    <SafeAreaView style={styles.main_container}>
      <Filter
        Items={Items}
        setItems={setItems}
        filterType={FilterType}
        setFilterType={setFilterType}
      />
      <ItemsComponent Items={Items} />
      <ItemAdd Items={Items} setItems={setItems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default App;
