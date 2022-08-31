import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import styles from "../components/styles";

const ThirdPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>This is the Third Page</Text>
        <Button
          title="Go to first page"
          onPress={() => {
            navigation.navigate("FirstPage");
          }}
        />
        <Button
          title="Go to second page"
          onPress={() => {
            navigation.navigate("SecondPage");
          }}
        />
      </View>
      <Text style={styles.textBottomStyle}>Thai-Nichi Institute of technology</Text>
    </View>
  );
};

export default ThirdPage;
