import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button,TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import FirstPage from "./screens/pages/FirstPage";
import SecondPage from "./screens/pages/SecondPage"
import ThirdPage from "./screens/pages/ThirdPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstPage'
      screenOptions={{
        headerStyle:{backgroundColor:'#008b8b'},
      headerTintColor:'#FFFF',
      headerTitleStyle:{fontWeight:'bold',fontSize:30}
      }}>
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage}/>
        <Stack.Screen name='ThirdPage' component={ThirdPage}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
