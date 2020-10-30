import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './components/ListScreen.js';
import ProfileScreen from "./components/ProfileScreen.js"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
//
// import ListScreen from './components/ListScreen.js';
// import ProfileScreen from "./components/ProfileScreen.js"
//
// const Stack = createStackNavigator();
//
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="List">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export default App;
