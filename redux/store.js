import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './slices/budgetSlice'
import expenseReducer from './slices/expenseSlice'

import { combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from '@react-native-async-storage/async-storage'



const rootReducer = combineReducers({
    budget:budgetReducer,
    expense:expenseReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
})

