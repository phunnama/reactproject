import { Text, View, Button } from "react-native";
import React from "react";
import  styles  from "../components/styles";

const FirstPage = ({navigation,route}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.textTopStyle}>This is the First Page</Text>
        <Button
          title="Go to second page"
          onPress={() => {
            navigation.navigate("SecondPage");
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

export default FirstPage;
