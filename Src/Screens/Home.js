import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Home ({navigation}) {
    return (
      <View>
        <Text style={{color:"black"}}>Home Screen</Text>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    );
  }