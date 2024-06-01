import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    expenses: [],
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense : (state,action) => {
      state.expenses.push(action.payload)
    },
    removeExpense: (state, action) => {
      const expenseIdToRemove = action.payload;
      state.expenses = state.expenses.filter(expense => expense.id !== expenseIdToRemove);
    },
  },
})

export const {addExpense, removeExpense} = expenseSlice.actions

export default expenseSlice.reducer