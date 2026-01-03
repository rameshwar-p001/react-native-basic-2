import { View, Text } from 'react-native'
import React from 'react'

const Prop2 = (props) => {
  return (
    <View>
      <Text>Prop2</Text>
      <Text>{props.data}</Text>
    </View>
  )
}

export default Prop2