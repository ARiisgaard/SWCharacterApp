import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ListScreen( { navigation } ) {
  return (
    <View style={styles.container}>
      <Text>This is a list of characters</Text>
      <Button
  title="Go to profile"
  onPress={() => navigation.navigate('ProfileScreen')}
/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
