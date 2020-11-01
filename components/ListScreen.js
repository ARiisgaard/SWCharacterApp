import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

export default function ListScreen({ navigation }) {

  const names = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dave',
    planet: 'Earth'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Bob',
    planet: 'Earth'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'James',
    planet: 'Mars'
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}
    onPress={() => navigation.navigate('Profile')}
    >{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.name}
  />
);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
  <FlatList
    data={names}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
});