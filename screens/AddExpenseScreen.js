import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/BackButton'
import AddBudget from '../assets/images/AddBudget.png'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { categories } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../redux/slices/expenseSlice'
import { updateRemainingAmount } from '../redux/slices/budgetSlice'

export default function AddExpenseScreen() {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');

    const budgets = useSelector(state => state.budget.budgets);

  const expenses = useSelector((state) => state.expense.expenses);
    const dispatch = useDispatch()
    const navigation = useNavigation();

    const handleAddExpense = () => {
        if(category && amount && title)
        {
            dispatch(addExpense({category, amount, title}))
            alert('Expense Added');
            navigation.goBack();
        }
        else{

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
                    <Text className="text-white text-xl font-bold text-center">AddExpenseScreen</Text>
                </View>
               
                <View className="flex-row justify-center my-3 mt-3 bg-gray-700 rounded-xl">
                    <Image className="h-80 w-80" source={AddBudget}/>
                </View>
                <View className="space-y-2 mx-2">
                    <Text className="text-lg text-white font-bold">Expense Title</Text>
                    <TextInput value={title} onChangeText={value => setTitle(value) } className="p-4 bg-gray-700 rounded-xl mb-3 text-white"/>
                    <Text className="text-lg font-bold text-white">Amount of this expense</Text>
                    <TextInput value={amount.toString()} onChangeText={value => setAmount(value)} className="p-4 bg-gray-700 rounded-xl mb-3 text-white" keyboardType={'numeric'}/>
                </View>
                <View className="m-2 space-x-2">
                    <Text className="text-lg font-bold text-white">Category of this expense</Text>
                    <View className="flex-row flex-wrap items-center mt-3">
                        {
                            categories.map(cat => {
                                let catBg = 'bg-white';
                                let catText = 'text-dark'
                                if(cat.value == category) {
                                    catBg = 'bg-orange-500',
                                    catText = 'text-white'
                                }
                                return(
                                    <TouchableOpacity onPress={()=>{setCategory(cat.value)}} key={cat.value} className={`${catBg} rounded-full p-3 px-4 mb-2 mr-2`}>
                                        <Text className={`${catText}`}>{cat.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
           
            <View className="bottom-10">
                <TouchableOpacity className="my-6 p-4" style={styles.button} onPress={handleAddExpense}>
                    <Text className="text-center text-white text-lg font-bold">Add Expense</Text>
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