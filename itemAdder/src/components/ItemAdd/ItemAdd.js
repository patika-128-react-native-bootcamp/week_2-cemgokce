import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './ItemAdd.style';

const ItemAdd = props => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);

  const submitHandler = () => {
     console.log('SubmitHandler logged.');
     const id = Math.random().toString();
    // const date = Date.now();
    // console.log(date);
     const newData ={id,name,price}
    props.onAddItem(newData);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <TextInput
          placeHolder="Name"
          onChange={setName}
          value={name}
          style={styles.text}
        />
      </View>
      <View>
        <Text>Price</Text>
        <TextInput
          placeHolder="Price"
          onChangeText={setPrice}
          value={price}
          style={styles.text}
        />
      </View>
      <Button title="Add" onPress={submitHandler}></Button>
    </View>
  );
};
export default ItemAdd;
