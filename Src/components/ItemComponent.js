import React  from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,FlatList} from 'react-native';
import {firebase} from '@react-native-firebase/database';

export default function ItemComponent ({items}) {
  //Delete object from database
  const handleDelete = key => {
    let ref = firebase.database().ref('/items');
    ref.child(key).remove();
  };
    return (
      <View style={styles.itemsList}>
        {/* {items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{item.name}</Text>
            </View>
          );
        })} */}
         <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.itemsList}>
            <Text style={styles.itemtext}>{item.name}</Text>
            <Text>{item.key}</Text>
            <TouchableOpacity
              onPress={() => {
                handleDelete(item.key);
              }}>
              <Text style={styles.deleteBtn}>DELETE</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
    );
 }

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});