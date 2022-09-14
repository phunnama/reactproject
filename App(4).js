import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {BottomTabBarHeightCallbackContext, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'


function HomeScreen({ navigation }){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home!</Text>
      <Button title = 'go to setting' 
      onPress={()=> navigation.navigate("Setting")}/>
    </View>
  )
} 

function SettingScreen({ navigation }){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings!</Text>
      <Button title='go to home' 
      onPress={()=> navigation.navigate("Home")}/>
    </View>
  )
} 

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused           ?'ios-information-circle'
          :'ios-information-circle-outline'
        }
        else if(route.name==='Setting'){
          iconName = focused?'ios-list':'ios-list-outline'
        }
        //you can return any conponent that you like here
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray',
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})