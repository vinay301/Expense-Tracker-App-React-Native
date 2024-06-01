import { View, Text, Image } from 'react-native'
import React from 'react'
import empty from '../assets/images/empty.png'
export default function EmptyList({message}) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
        <Image source={empty} className="h-56 w-56"/>
      <Text className="text-white font-bold">{message || 'data not found'}</Text>
    </View>
  )
}