import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Avatar from './Avatar.js';
import colorDictionary from './colorDictionary.js';


export default function ProfileScreen({ route, navigation }) {
  const { chosenCharacter } = route.params;

  //This component is for character details - fx: "Height: 2.13"
  const CharacterDetails = ({ category,data }) => (
  <View style={{ flexDirection:'row', width: "100%"}}>
  <View style={{ alignItems: 'flex-end', width: "50%"}}>
  <Text style={styles.categoyText}>{category}:  </Text>
  </View>

  <View style={{ width: "50%"}}>
  <Text style={styles.infoText}>{data}</Text>
  </View>
  </View>
)


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
    <Text style={styles.nameText}>{chosenCharacter.name}</Text>
    <Avatar
        gender={chosenCharacter.gender}
        skinTone={typeof colorDictionary[chosenCharacter.skin_color] !== "undefined" ? colorDictionary[chosenCharacter.skin_color] : "yellow"}
        hairColor={typeof colorDictionary[chosenCharacter.hair_color] !== "undefined" ? colorDictionary[chosenCharacter.hair_color] : "pink"}
        size={400}
        />
        <View style={{justifyContent: 'center',}}>
        <CharacterDetails category={"Height"} data={chosenCharacter.height}/>
        <CharacterDetails category={"Weight"} data={chosenCharacter.mass}/>
        <CharacterDetails category={"Birth Year"} data={chosenCharacter.birth_year}/>
        </View>
      <Button
      buttonStyle={styles.returnButton}
        title="Return to list"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 30,
    color: '#f0e43e'
  },
  categoyText: {
    textAlign: "right",
    fontSize: 20,
    color: '#f0e43e'
  },
  infoText: {
    textAlign: "left",
    fontSize: 20,
    color: '#f0e43e'
  },
  returnButton: {
    backgroundColor: '#363636',
    marginTop: 5,
  },

});
