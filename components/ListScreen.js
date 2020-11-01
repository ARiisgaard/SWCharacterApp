import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Avatar from './Avatar.js';

export default function ListScreen({ navigation }) {

  const names = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dave',
    planet: 'Earth',
    gender: "male",
    skin_color: "black",
    hair_color: "pink"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Bob',
    planet: 'Earth',
    gender: "male",
    skin_color: "black",
    hair_color: "orange"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'James',
    planet: 'Mars',
    gender: "male",
    skin_color: "black",
    hair_color: "orange"
  },
];

const Item = ({ characterInfo }) => (
  <View style={styles.item}>
  <Avatar
      gender={characterInfo.gender}
      skinTone={characterInfo.skin_color}
      hairColor={characterInfo.hair_color}
      size={100}
      />
    <Text style={styles.title}
    onPress={() => navigation.navigate('Profile')}
    >{characterInfo.name}{characterInfo.planet}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item characterInfo={item}
  />
);

  return (
    <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
      <Text>Star Wars Characters</Text>
  <FlatList
    data={names}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    display: 'flex',
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 10,
      right: 5,
      left: 5
  },
  title: {
    fontSize: 32,
  },
});