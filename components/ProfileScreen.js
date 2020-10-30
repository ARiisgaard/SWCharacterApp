import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go back to list"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
