import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../theme';

export default function ScreenWrapper({children}) {
    let statusBarHeight = StatusBar.CurrentHeight ? StatusBar.CurrentHeight : Platform.OS == 'android'?50 : 0;
  return (
    <View style={{marginTop: statusBarHeight, backgroundColor:colors.BLACK, height:'100%', width:'100%'}}>
    {
        children
    }
    </View>
  )
}