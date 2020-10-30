import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar.js';

export default function ProfileScreen({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://swapi.dev/api/people/1/',
      );

      setData(result.data);
      console.log(result.data)
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Avatar
    gender={"bot"}
    skinTone={"brown"}
    hairColor={"black"}
    size={300}
    />
      <Text>Name: {data.name}</Text>
      <Text>Height: {data.height}</Text>
      <Text>Weight: {data.mass}</Text>
      <Text>Weight: {data.birth_year}</Text>
      <Button
        title="Go back to list"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
