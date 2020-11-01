import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar.js';
import colorDictionary from './colorDictionary.js';


export default function ProfileScreen({ route, navigation }) {
  const { chosenCharacter } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Avatar
        gender={chosenCharacter.gender}
        skinTone={typeof colorDictionary[chosenCharacter.skin_color] !== "undefined" ? colorDictionary[chosenCharacter.skin_color] : "light"}
        hairColor={typeof colorDictionary[chosenCharacter.hair_color] !== "undefined" ? colorDictionary[chosenCharacter.hair_color] : "pink"}
        size={300}
        />
      <Text>Name: {chosenCharacter.name}</Text>
      <Text>Height: {chosenCharacter.height}</Text>
      <Text>Weight: {chosenCharacter.mass}</Text>
      <Text>Birth Year: {chosenCharacter.birth_year}</Text>
      <Button
        title="Go back to list"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
