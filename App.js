import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

function FeedScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label='Help' onPress={()=> alert('Link to help')} />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();

function MyDreawer(){
  return(
    <Drawer.Navigator useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent{...props}/>}
      screenOptions={{
        drawerStyle:{
          backgroundColor:'pink',
          width:240
        }
      }}>
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="Article" component={ArticleScreen} />
      </Drawer.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDreawer/>
    </NavigationContainer>
  );
};

export default App;