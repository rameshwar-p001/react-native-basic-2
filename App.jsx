///// rnfe

// import { Button, StyleSheet, Text} from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
//
//
// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text>hello how are you </Text>
//       <Button title='click here ' />
//     </SafeAreaView>
//   )
// }
//
// export default App
//
// const styles = StyleSheet.create({})




// import { Text , StyleSheet, Button} from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'


// const App = () => { 
    
//   return (
//    <SafeAreaView>
//       <Text style = {{ fontSize : 20 , marginTop : 20 ,color : "blue" }}>hello how are you </Text>    {/*here we give the inline css*/}
//       <Text style={styles.text}>{count}</Text>           {/*here we give the Internal css*/}
//       <Button title='Press here'/>
//    </SafeAreaView>
//   )
// }

// export default App

// // here we call the internal css 
// const styles = StyleSheet.create({
      
//   text : {
//     color : "red", 
//     fontSize : 50,
//     marginTop:20, 
//   },
// })


// // // useState  
// // with mini task 
// import { Text, Button, View, StyleSheet, Pressable } from 'react-native';
// import React, { useState } from 'react';

// let App = () => {
//   let [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>The Count is : {count}</Text>
//       <Pressable style={styles.bu}  title="On-Press" onPress={() => setCount(count + 1)} >  <Text style={styles.buttonText}>Increase</Text></Pressable>
//       <Pressable style={styles.bu} title="for Minus" onPress={() => setCount(count - count)} >  <Text style={styles.buttonText}>Reset</Text></Pressable>
//     </View>
//   );
// };

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   bu:{
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginVertical: 8
//   },
//   buttonText: {
//     fontSize :40,
//     alignItems: "center"
//   }
// });


// //// when we click on button then it will change a name 
// import { View, Text ,Button} from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//         const [name , setname ]= useState("Patil raemeshwar")

//   return (
//     <SafeAreaView>
//       <Text style={{fontSize : 30 }}>my name is = {name}</Text>
//       <Button title="Press me" onPress={() => setname("Patil Rameshwar ")}/>
     
//     </SafeAreaView>
//   )
// }

// export default App

 
//// Props 
import { View } from 'react-native'
import React from 'react'
import Prop1 from './Component/propers/prop1'

const App = () => {
  return (
    <View>
      <Prop1/>
    </View>
  )
}

export default App