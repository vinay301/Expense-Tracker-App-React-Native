import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/BackButton'
import AddBudget from '../assets/images/AddBudget.png'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addBudget } from '../redux/slices/budgetSlice'

export default function AddBudgetScreen() {
    const [category, setCategory] = useState('');
    const [budget, setBudget] = useState(0);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleAddBudget = () => {
        if(category && budget)
        {
            dispatch(addBudget({category,budget}))
            alert('Budget Added');
            navigation.navigate('Home');
        }
        else{
            console.log("error")
        }
    }
  return (
    <ScreenWrapper>
        <View className="flex justify-between h-full mx-4">
            <View>
                <View className="relative mt-5">
                    <View className="absolute top-0 left-0">
                        <BackButton/>
                    </View>
                    <Text className="text-white text-xl font-bold text-center">AddBudgetScreen</Text>
                </View>
               
                <View className="flex-row justify-center my-3 mt-2">
                    <Image className="h-96 w-96" source={AddBudget}/>
                </View>
                <View className="space-y-2 mx-2">
                    <Text className="text-lg text-white font-bold">Budget Category</Text>
                    <TextInput value={category} onChangeText={value => setCategory(value) } className="p-4 bg-gray-700 rounded-xl mb-3 text-white"/>
                    <Text className="text-lg font-bold text-white">Budget for this expense</Text>
                    <TextInput value={budget.toString()} onChangeText={value => setBudget(value)} className="p-4 bg-gray-700 rounded-xl mb-3 text-white" keyboardType={'numeric'}/>
                </View>
            </View>
           
            <View className="bottom-10">
                <TouchableOpacity className="my-6 p-4" style={styles.button} onPress={handleAddBudget}>
                    <Text className="text-center text-white text-lg font-bold">Add Budget</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    button:{
      backgroundColor:colors.PRIMARY,
      borderRadius:99,
    }
  })