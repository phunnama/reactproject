import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Styles = () => {
  return (
    <View>
    </View>
  )
}

export default Styles

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
      }, 
      title : {
        fontSize:20,
      },
      warning : {
        color : 'red'
      }
})