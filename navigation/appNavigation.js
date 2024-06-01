import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddBudgetScreen from '../screens/AddBudgetScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import CategoryExpenseList from '../screens/CategoryExpenseList';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';

const Stack = createNativeStackNavigator();
let persistor = persistStore(store)

export default function AppNavigation() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="AddBudget" component={AddBudgetScreen} options={{headerShown:false}}/>
            <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CategoryExpense" component={CategoryExpenseList} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
  );
}

