import React from 'react'
import { SafeAreaView, Text, StyleSheet, View,Button } from 'react-native'

export default props => {
  return (
    <View style={{flex:1,}}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        {props.avancar 
        ? <Button
          title='Avancar'
          onPress = {()=>{
            props.navigation.push(
              props.avancar, 
              {
                numero: parseInt(Math.random()*100)
              }
            )
          }}
        />
        :null
        }
        {props.voltar 
        ? <Button
          title='Voltar'
          onPress = {()=>{
            props.navigation.goBack()
          }}
        />
        :null
        }
      </View>
      <View style={{flex:1,}}>
        {props.children}
      </View>
    </View>
  )
}