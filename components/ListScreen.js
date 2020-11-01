import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Avatar from './Avatar.js';

export default function ListScreen({ navigation }) {

  const names = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Luke Skywalker',
    planet: 'Earth',
    gender: "male",
    skin_color: "black",
    hair_color: "pink"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'C-3PO',
    planet: 'Earth',
    gender: "male",
    skin_color: "black",
    hair_color: "orange"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'R2-D2',
    planet: 'Mars',
    gender: "male",
    skin_color: "black",
    hair_color: "orange"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    name: 'Darth Vader',
    planet: 'Mars',
    gender: "female",
    skin_color: "black",
    hair_color: "orange"
  },  {
      id: '58694a0f-3da1-471f-bd96-315571e29d71',
      name: 'Hansolo',
      planet: 'Mars',
      gender: "bot",
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
      size={80}
      />
      <View style={{ width: "100%"}}>
    <Text style={styles.nameText}
    onPress={() => navigation.navigate('Profile')}
    >{characterInfo.name}</Text>
    <Text style={styles.planetText}> {characterInfo.planet} </Text>
    </View>
  </View>
);

const renderItem = ({ item }) => (
  <Item characterInfo={item}
  />
);

  return (
    <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#363636'}}>
      <Text style={styles.titleText}>Star Wars Characters</Text>
  <FlatList style={{width: "100%"}}
    data={names}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: '#000000',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 35,
    color: '#f0e43e'
  },
  nameText: {
    fontSize: 30,
    color: '#f0e43e'
  },
  planetText: {
    fontSize: 15,
    color: '#f0e43e',
    alignContent: "flex-end"
  },
});