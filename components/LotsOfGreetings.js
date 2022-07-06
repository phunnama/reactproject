import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) =>{
    return(
        <View style={{alignItems:'center'}}>
            <text> Hello {props.name} {props.date}</text>
        </View>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
        <Greeting/>
        <Greeting name = 'Merry Christmas' date = '25 Dec.'/>
        <Greeting name = 'Happy New Year' date = '1 Jan.'/>
        <Greeting name = 'Songkran Festival' date = '13 Apr'/>
    </View>
  )
}

export default LotsOfGreetings