import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNamePassword from './components/UserNamePassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      <TouchablePractice/>
      
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItem:'center'
  }
});