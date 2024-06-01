import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import Header from '../components/Header'
import loginBg from '../assets/images/loginBg.png'
import { AntDesign } from '@expo/vector-icons';
import RandomImagePicker from '../assets/images/randomImagePicker'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import uuid from 'react-native-uuid';

const recentExpenses = [
  {
    id:1,
    category:'Food',
    budget:400
  },
  {
    id:2,
    category:'Bills',
    budget:700
  }
]

export default function HomeScreen() {
  const budgets = useSelector((state) => state.budget.budgets)
  const expenses = useSelector((state) => state.expense.expenses);
  const navigation = useNavigation();

  return (
    <ScreenWrapper className={`flex-1`}>
      <View>
        <Header/>

        <View className="flex-row justify-center items-center bg-gray-700 rounded-xl mx-5 my-5 py-3 ">
          <Image source={loginBg} className="w-60 h-60"/>
        </View>

        <View className="mx-6 space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-xl font-bold">Recent Budgets</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AddBudget')}} >
              <AntDesign name="pluscircle" size={54} color={colors.PRIMARY} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height:330, marginTop:15}}>
          <FlatList
            data={budgets}
            ListEmptyComponent={<EmptyList message={"You've not listed any budget"}/>}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id ? item.id.toString() : uuid}
            columnWrapperStyle={{
              justifyContent: 'space-around'
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={()=>{navigation.navigate('CategoryExpense', {...item})}} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View className>
                    <Image source={RandomImagePicker()} className="w-36 h-36 mb-2"/>
                    <Text className="text-dark font-bold">{item.category}</Text>
                    <Text className="text-dark font-xs">{item.budget}</Text>
                    {/* <Text className="text-dark font-xs">Left: {remainingAmount}</Text> */}
                  </View>
                </TouchableOpacity>
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
