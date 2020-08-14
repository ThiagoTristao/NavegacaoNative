import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: props.corDeFundo || '#000'
      }}>
      <Text style={{
        fontSize:50,
        color: props.corDoTexto || '#fff'
        }}>
        {props.children}
      </Text>
    </View>
  )
}