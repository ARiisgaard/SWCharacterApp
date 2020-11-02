import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import Avatar from './Avatar.js';
import colorDictionary from './colorDictionary.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListScreen({ navigation }) {

  const [people, setPeople] = useState({});
  const [planetDictionary, setPlanetDictionary] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [displaySearchedData, setDisplaySearchedData] = useState(false);
  const [searchResult, setSearchResult] = useState({});




  const searchPeople = async ( site ) => {
    setLoaded(false);

    const result = await axios(
      site,
    );
    const alphabeticalResult = result.data.results.sort(function(a, b){
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
})
    setLoaded(true);
    if (result.data.count > 0) {
      setSearchResult(alphabeticalResult);
      setDisplaySearchedData(true)
    }
    else {
      console.log("No characters found")
    }
  };

  //On mount load people and planets
  useEffect(() => {
    //Loads people
      const fetchPeople = async ( site ) => {
        const result = await axios(
          site,
        );
        //Organise the results in alphabetical order
        const alphabeticalResult = result.data.results.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
        setPeople(alphabeticalResult);
        //Replaces the loading spinner with the content
        setLoaded(true);

      };
      //Fetch Planet data
    const fetchPlanets = async ( site ) => {
      const result = await axios(
        site,
      );

      //Creates a planet dictionary translating urls into planet names
      const planetNames = result.data.results.map(({ name }) => name)
      const planetUrl = result.data.results.map(({ url }) => url)
      const tempObject = planetDictionary
      //Urls and names get added to the object in pairs
      planetUrl.forEach((key, i) => tempObject[key] = planetNames[i]);
      setPlanetDictionary(tempObject)

      //Checks if all pages of planet data have been collected otherwise the function is repeated with the next page
      const nextPlanetPage = result.data.next
      if (nextPlanetPage !== null) {
        fetchPlanets(nextPlanetPage);
      }
    };

    fetchPlanets("https://swapi.dev/api/planets/");
    fetchPeople('https://swapi.dev/api/people/');
  }, []);

//Component for displaying the people with an avatar, name and planet
//CLicking it leads to the relevant ProfileScreen
const renderItem = ({ item }) => (
  <Item characterInfo={item}
  />
);

const Item = ({ characterInfo }) => (
  <TouchableOpacity
  style={styles.item}
  onPress={() => navigation.navigate('Profile', {
              chosenCharacter: characterInfo,
            })}>
  <Avatar
      gender={characterInfo.gender}
      skinTone={typeof colorDictionary[characterInfo.skin_color] !== "undefined" ? colorDictionary[characterInfo.skin_color] : "yellow"}
      hairColor={typeof colorDictionary[characterInfo.hair_color] !== "undefined" ? colorDictionary[characterInfo.hair_color] : "pink"}
      size={80}
      />
      <View style={{ width: "100%"}}>
    <Text style={styles.nameText}

    >{characterInfo.name}</Text>
    <Text style={styles.planetText}> {planetDictionary[characterInfo.homeworld]} </Text>
    </View>
  </TouchableOpacity >
);


// A spinner for when the data is loading
const loadingItem =  <ActivityIndicator
               color = '#bc2b78'
               size = "large"/>

// List with either searchresults or everyone
const loadedList =   <FlatList style={{width: "100%"}}
    data={displaySearchedData ? searchResult : people}
    renderItem={renderItem}
    keyExtractor={item => item.url}
  />

  return (
    <View style={{ display: "flex", alignItems: 'center',
    backgroundColor: '#363636', height: "100%"}}>
      <Text style={styles.titleText}>Star Wars Characters</Text>
      <View style={{display: "flex",
        flexDirection: "row",}}>
      <TextInput style={styles.searchBar}
  onChangeText={(search) => setSearch({search})}
/>

<Button
  icon={<Icon
    name={displaySearchedData ? "times" : "search"}
    size={40}
    color="#f0e43e"
  />}
  buttonStyle={{
  backgroundColor: "#000000",
  height: 50,
  marginTop: 10,
  marginBottom: 10,
}}
  title=""
  onPress={() => displaySearchedData ? setDisplaySearchedData(false): searchPeople('https://swapi.dev/api/people/?search=' + search.search)}
/>
</View>
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
    color: '#f0e43e'
  },
  searchBar: {
  fontSize: 24,
  marginTop: 10,
  marginBottom: 10,
  width: '80%',
  height: 50,
  backgroundColor: 'white',
},
});