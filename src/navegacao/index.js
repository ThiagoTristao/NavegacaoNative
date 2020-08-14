import React from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import  { registerRootComponent } from 'expo';
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'
import Drawer from './Drawer'

// const Roots = () => {
//   return (
//     <View style={{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       backgroundColor: '#000'
//       }}>
//       <Text style={{
//         fontSize:50,
//         color:'#FFF'
//         }}>
//         nav!
//       </Text>
//     </View>
//   )
// }
const Roots = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack/>
        {/* <Tab/> */}
        {/* <Drawer/> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default registerRootComponent(Roots);