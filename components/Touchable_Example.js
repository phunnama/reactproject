import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import React from "react";

const Touchable_Example = () => {
  const onPress = (msg) => {
    alert("Alert for " + msg);
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TouchableNativeFeedback
        onPress={()=>onPress('TouchableNativeFeedback Pressed')}
        >
            <View style={styles.button}>
                <Text>TouchableNativeFeedback (Only Android)</Text>
            </View>
        </TouchableNativeFeedback>

        <TouchableHighlight style={styles.button}
        onPress={()=> onPress('TouchableHighlight pressed')}>
            <Text>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity
        style = {styles.button}
        onPress={()=> onPress('TouchableOpacity pressed')}>
            <Text>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
        onPress={()=> onPress('TouchableWithoutFeedback pressed')}>
            <View style={styles.button}>
            <Text>TouchableWithoutFeedback</Text>
            </View>
            
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", //color of button
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
