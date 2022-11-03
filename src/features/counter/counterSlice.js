import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    playerNames: [],
    playerNumbers: []
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, amount) => {
      state.value += amount.payload[0] * amount.payload[1];
    },
    setPlayers: (state, action) => {
        state.playerNames = action.payload[0];
        state.playerNumbers = action.payload[1];
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setPlayers } = counterSlice.actions

export default counterSlice.reducer