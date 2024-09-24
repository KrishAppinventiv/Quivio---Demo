import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <RootNavigator/>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})