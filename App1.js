import { View, Text , StyleSheet , Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Styles from './components/Styles';
import Stysheet from './components/Stysheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/cat';
import Cafe from './components/Cafe'

const App = () => {

  const showData = () => {
    alert("Hello Button")

  }
  return (
    <View style={Styles.container}>
      <Text style={[Styles.title,Styles.warning]}>Hello, React Native</Text>
      {/* <Logo/> */}
      {/* <Styles/> */}
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Text> Welcome </Text>
      <Cafe/>
      <Cafe/>
      <Cafe/> */}
      <Logo/>
      <Button
      onPress = {showData}
      title = 'Click me'/>
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
