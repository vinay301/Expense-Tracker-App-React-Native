import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
export default function BackButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}} className="bg-gray-500 rounded-full h-8 w-8">
        <Ionicons name="chevron-back" size={30} color={colors.WHITE} />
    </TouchableOpacity>
  )
}