import { View, Text } from 'react-native'
import React from 'react'
import { categoryBg } from '../theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeExpense } from '../redux/slices/expenseSlice';

export default function ExpenseCard({item}) {
  const dispatch = useDispatch();
  const handleRemoveExpense = (expenseId) => {
    dispatch(removeExpense(expenseId))
        alert('Expense Removed!')
  }

  return (
    <View style={{backgroundColor: categoryBg[item.category]}} className="flex-row justify-between items-center p-3 px-5 mb-5 bg-orange-500 rounded-2xl">
      <View>
        <Text className="text-white font-bold">{item.title}</Text>
        <Text className="text-white text-xs">{item.category}</Text>
      </View>
      <View className="flex-row px-2 space-x-2 justify-center items-center">
        <Text className="text-white">{item.amount}</Text>
        <MaterialCommunityIcons name="delete" size={24} color="white" onPress={()=>{handleRemoveExpense(item.id)}}/>
      </View>
    </View>
  )
}