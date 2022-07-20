import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

const AlertComponent = () => {
  const simpleAlertHanler = () => {
    alert("Hello, I am Simple Alert from JavaScript");
  };
  const twoOptionAlertHanler = () =>{
    //user alert from react native
    Alert.alert(
        //title
        'Hello',
        //body
        'I am two option alert from react native',
        [
            {
                text:'Yes',
                onPress: () => alert('Yes Pressed')
            },
            {
                text:'No',
                onPress: () => alert('No Pressed'),
                style:'cancel'
            }
        ],
        //clicking out side alert 
        {cancelable:false}


    );
  } 
  return (
    <View style={styles.container}>
      <Button title="Simple Alert" onPress={simpleAlertHanler} />

      <Button title="Alert with Two Option" onPress={twoOptionAlertHanler} />
    </View>
  );
};

export default AlertComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
});
