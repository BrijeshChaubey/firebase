import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import database from '@react-native-firebase/database';

let itemsRef = database().ref('/items');

export default function List() {
  const [itemsArray, setItemsArray] = React.useState([]);
  let item = [];
  React.useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      for (let x in data) {
        console.log(x);
        console.log('hello======', data[x]);
        item.push({name: data[x].name, key: x});
      }
      setItemsArray(item);
    });
  }, []);

  return (
    <View style={styles.container}>
      {itemsArray.length > 0 ? (
        <ItemComponent items={itemsArray} />
      ) : (
        <Text>No items</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});