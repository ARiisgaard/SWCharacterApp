import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar.js';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Avatar
    gender={"bot"}
    skinTone={"brown"}
    hairColor={"black"}
    size={300}
    />
      <Text>Name:</Text>
      <Text>Name:</Text>
      <Text>Name:</Text>
      <Button
        title="Go back to list"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
