import { View, TextInput ,Text} from 'react-native'
import React from 'react'

export default function Cat() {
  return (
    <View>
        <Text> I am also a cat!</Text>
    <View style = {{flex : 1 ,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        }}>

        {/* <TextInput
            placeholder='Course Goal'
            style = {{width:'80%',
            borderColor:'black',
            borderWidth:1,
            padding:10,
            borderColor:'gray'
        }}
        /> */}
    </View>
</View>
  )
}