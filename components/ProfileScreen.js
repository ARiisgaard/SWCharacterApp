import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar.js';


export default function ProfileScreen({ route, navigation }) {
  const { chosenCharacter } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Avatar
        gender={chosenCharacter.gender}
        skinTone={chosenCharacter.skin_color === "fair" ? "light" : "red"}
        hairColor={chosenCharacter.hair_color === "blond" ? "blonde" : "pink"}
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
