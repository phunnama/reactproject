import { StyleSheet, Text, View ,TextInput , Button} from 'react-native'
import React,{useState} from 'react'

const UserNamePassword = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const ShowData = () => {
        alert("Email: "+(email)+"\n Password : "+(password))
    }
    
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput 
      value={email}
      style={styles.textinput}
      onChangeText={(email)=>{setEmail(email)}}
      placeholder = 'Email'/>

      <TextInput
      value={password}
      style={styles.textinput}
      onChangeText={(password)=>{setPassword(password)}}
      placeholder = 'Password'/>

      <Button
      title='Submit'
      onPress={ShowData}/>


    </View>
  )
}

export default UserNameandPassword

const styles = StyleSheet.create({
    textinput : {
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#e8e8e8'
    }
})