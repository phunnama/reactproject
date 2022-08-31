import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import  styles  from "../components/styles";

const SecondPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is the Second Page</Text>
      <Button
        title="Go to first page"
        onPress={() => {
          navigation.navigate("FirstPage");
        }}
      />
      <Button
        title="Go to third page"
        onPress={() => {
          navigation.navigate("ThirdPage");
        }}
      />
    </View>
    <Text style={styles.textBottomStyle}>Thai-Nichi Institute of technology</Text>
  </View>
  );
};

export default SecondPage;


