import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
        <View>
        <Text style={{color:colors.WHITE, fontSize:24}}>Hi User 👋</Text>
        <Text style={{color:colors.WHITE, fontSize:32, fontWeight:'bold'}}>Welcome Back!</Text>
        <Text style={{color:colors.WHITE, fontSize:36, fontWeight:'bold', shadowColor:'rgba(0,0,0,0.25)', shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:4}}>SpendWise</Text>
        </View>
    <EvilIcons name="navicon" size={32} color={colors.WHITE} style={styles.toggleBtn}/>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:8,
        alignItems:'center',
        marginTop:70,
        marginLeft:30,
        justifyContent:'space-between',
        width:"85%",

    },
    toggleBtn:{
        backgroundColor:colors.SECONDARY,
        borderRadius:99,
        padding:14,
    }
})