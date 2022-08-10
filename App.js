import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button,TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First Page'
      screenOptions={{
        headerStyle:{backgroundColor:'#008b8b'},
      headerTintColor:'#FFFF',
      headerTitleStyle:{fontWeight:'bold',fontSize:30}
      }}>
        <Stack.Screen name='First Page' component={FirstPage} />
        <Stack.Screen name='Second Page' component={SecondPage}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
