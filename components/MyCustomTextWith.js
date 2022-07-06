import { View, Text } from 'react-native'
import React from 'react'

const Person = (props) => {
    return(
        <View style={{alignItems:'center'}}>
        <text> Your First Name is {props.fName}! and Last name is {props.lName} </text> 
        </View>
    )

}
const MyCustomTextWith = () => {
  return (
    <View style={{top:400}}>
        <Person fName = 'Phunnama' lName = 'Masud'/> 
        <Person fName = 'Saharat' lName = 'Milang'/> 
    </View>
  )
}

export default MyCustomTextWith