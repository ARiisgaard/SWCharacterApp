import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BigHead } from 'react-native-bigheads'

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BigHead
  accessory="none"
  bgColor="blue"
  bgShape="circle"
  body="chest"
  clothing="shirt"
  clothingColor="black"
  eyebrows="raised"
  eyes="normal"
  facialHair="none"
  graphic="none"
  hair="short"
  hairColor="black"
  hat="none"
  lashes={false}
  lipColor="red"
  mouth="grin"
  showBackground={true}
  size={200}
  skinTone="brown"
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
