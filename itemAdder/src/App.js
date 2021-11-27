import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
  Switch,
} from 'react-native';
import Filter from './components/Badge/Filter';
import ItemsComponent from './components/Items/ItemsComponent';
import ItemAdd from './components/ItemAdd/ItemAdd';

const App = () => {
  const [Items, setItems] = useState([{id: 1, name: 'denemeItem', price: 15}]);

  const oonAddItem = newData => {
    console.log('geldi' + newData.name);
    setItems([...Items, newData]);

    console.log('App Component:' + Items[0].name);
  };

  return (
    <SafeAreaView>
      <Filter />
      <ItemsComponent Items={Items} />
      <ItemAdd onAddItem={oonAddItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
