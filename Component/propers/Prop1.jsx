import { View, Text,Button } from 'react-native'
import React, { useState } from 'react-native'
import prop2 from './propers/prop2'
import { SafeAreaView } from 'react-native-safe-area-context'


const Prop1 = () => {
  
  let [count,setCount] = useState(0)
  
  return (
    <SafeAreaView>
      <Text>prop1</Text>
      <Button title='press'  onPress={()=> setCount(count+1)}/>

      <prop2 data={count}/>
    </SafeAreaView>
  )
}

export default Prop1