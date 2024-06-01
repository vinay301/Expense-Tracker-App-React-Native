import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import Header from '../components/Header'
import loginBg from '../assets/images/loginBg.png'
import { AntDesign } from '@expo/vector-icons';
import RandomImagePicker from '../assets/images/randomImagePicker'
import EmptyList from '../components/emptyList'
import { useNavigation, useRoute } from '@react-navigation/native'
import BackButton from '../components/BackButton'
import ExpenseCard from '../components/expenseCard'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid';
import {removeBudget  } from '../redux/slices/budgetSlice'
const recentExpenses = [
  {
    id:1,
    title:"Gym Membership",
    amount:1200,
    category:'other',
  },
  {
    id:2,
    title:"Food Delivery",
    amount:500,
    category:'food'
  },
  {
    id:3,
    title:"Rent",
    amount:5000,
    category:"bills"
  }
]




export default function CategoryExpenseList(props) {
    const expenses = useSelector((state) => state.expense.expenses)
  //console.log('Route params:', props);
    const {id, category, totalBudget} = props.route.params
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleRemoveBudget = (budgetId) => {
        dispatch(removeBudget(budgetId))
        alert('Budget Removed!')
        navigation.goBack();
    }
  return (
    <ScreenWrapper className={`flex-1`}>
      <View className="px-4">
        {/* <Header/> */}
        <View className="relative mt-5">
            <View className="absolute top-0 left-0">
                        <BackButton/>
            </View>
            <Text className="text-white text-xl font-bold text-center">{category} Expense List</Text>
        </View>

        <View className="flex-row justify-center items-center bg-gray-700 rounded-xl mx-5 my-5 py-3 ">
          <Image source={loginBg} className="w-72 h-72"/>
        </View>

        <View className="mx-6 space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-xl font-bold">Recent Expenses</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{handleRemoveBudget(id)}} >
              <AntDesign name="minuscircle" size={54} color={colors.PRIMARY} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AddExpense')}} >
              <AntDesign name="pluscircle" size={54} color={colors.PRIMARY} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height:330, marginTop:15}}>
          <FlatList
            data={expenses}
            ListEmptyComponent={<EmptyList message={"You've not listed any expense"}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id ? item.id.toString() : uuid}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <ExpenseCard item={item}/>
              )
            }}
          />
        </View>

      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:colors.WHITE,
    borderRadius:99,
  }
})
