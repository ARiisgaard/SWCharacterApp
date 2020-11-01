import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import Avatar from './Avatar.js';

export default function ListScreen({ navigation }) {

  const [people, setPeople] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      const result = await axios(
        'https://swapi.dev/api/people/',
      );
      const alphabeticalResult = result.data.results.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
      setPeople(alphabeticalResult);
      setLoaded(true);
    };

    // fetchPlanets();
    fetchPeople();
  }, []);

const Item = ({ characterInfo }) => (
  <View style={styles.item}>
  <Avatar
      gender={characterInfo.gender}
      skinTone={characterInfo.skin_color === "fair" ? "light" : "black"}
      hairColor={characterInfo.hair_color === "blond" ? "blonde" : "pink"}
      size={80}
      />
      <View style={{ width: "100%"}}>
    <Text style={styles.nameText}
    onPress={() => navigation.navigate('Profile', {
            chosenCharacter: characterInfo,
          })}
    >{characterInfo.name}</Text>
    <Text style={styles.planetText}> {characterInfo.planet} </Text>
    </View>
  </View>
);

const renderItem = ({ item }) => (
  <Item characterInfo={item}
  />
);
const loadingItem =  <ActivityIndicator
               color = '#bc2b78'
               size = "large"/>


const loadedList =   <FlatList style={{width: "100%"}}
    data={people}
    renderItem={renderItem}
    keyExtractor={item => item.url}
  />

  return (
    <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#363636'}}>
      <Text style={styles.titleText}>Star Wars Characters</Text>
      {loaded ? loadedList : loadingItem}
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