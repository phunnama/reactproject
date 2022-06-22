import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Styles from './components/Styles';

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={[Styles.title,Styles.warning]}>Hello, React Native</Text>
      <Logo/>
      <Styles/>
    </View>
  )
}

export default App

/* const styles = StyleSheet.create({
container: {
  flex:1,
  justifyContent:'center',
  alignContent:'center'
}, 
title : {
  fontSize:20,
},
warning : {
  color : 'red'
}


} );
 */
