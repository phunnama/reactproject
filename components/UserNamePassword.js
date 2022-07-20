import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const checkTextInput= () => {
        if (!userName.trim()) {
            alert('Please Enter Name');
            return;
            }
        if (!userEmail.trim()) {
            alert('Please Enter Email');
                return;
            }
        else{
            alert('Success');
        }
    }
  return (
    <View>
        <TextInput
        value={userName}
        onChangeText={(userName) => {
          setUserName(userName);
        }}
        style={styles.input}
        placeholder="Name"
        />
       <TextInput
        value={userEmail}
        onChangeText={(userEmail) => {
          setUserEmail(userEmail);
        }}
        style={styles.input}
        placeholder="Email"
        />

        <Button onPress={checkTextInput} title="Submit" 
        style={styles.submitButton}/>
    </View>
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {
      paddingTop: 23,
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: "#7a42f4",
      borderWidth: 1,
    },
    submitButton: {
      backgroundColor: "#7a42f4",
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText: {
      color: "white",
    },
  });