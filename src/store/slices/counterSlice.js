import { createSlice } from "@reduxjs/toolkit";

const counterSlace = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + Number(action.payload);
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset, incrementByValue } =
  counterSlace.actions;
export default counterSlace.reducer;
