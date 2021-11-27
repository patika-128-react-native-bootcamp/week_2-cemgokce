import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './ItemAdd.style';

const ItemAdd = ({setItems, Items}) => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = () => {
    if (!name || !price) {
      return;
    }
    const id = Math.random().toString();
    const date = Date.now();
    const newItem = {id, name, price, date};
    const newItems = [...Items, newItem];
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <TextInput
          ref={nameRef}
          placeHolder="Name"
          onChangeText={setName}
          style={styles.text}
        />
      </View>
      <View>
        <Text>Price</Text>
        <TextInput
          ref={priceRef}
          placeHolder="Price"
          onChangeText={setPrice}
          style={styles.text}
        />
      </View>
      <Button title="Add" onPress={submitHandler}></Button>
    </View>
  );
};
export default ItemAdd;
