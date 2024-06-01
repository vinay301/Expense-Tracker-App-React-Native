import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    budgets: [],
}


export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudget : (state,action) => {
        state.budgets.push(action.payload)
    },
  
    removeBudget: (state, action) => {
      const budgetIdToRemove = action.payload;
      state.budgets = state.budgets.filter(budget => budget.id !== budgetIdToRemove);
    },
  },
})

export const {addBudget, updateRemainingAmount, removeBudget} = budgetSlice.actions

export default budgetSlice.reducer