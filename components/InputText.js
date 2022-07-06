import { View, Text ,TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const InputText = () => {
    const [userName,setUsername] = useState(''); 
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert any text in below input</Text>
      <TextInput 
      value={userName}
      onChangeText = {(userName)=>{setUsername(userName)}}
      style = {style.textinput}
      placeholder='please input username'/>
      
      <text style={{color:'blue'}}>{userName}</text>
    </View>
  )
}

export default InputText

const style = StyleSheet.create({
    textinput:{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#e8e8e8'
    }
})