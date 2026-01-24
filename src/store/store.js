import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlices";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
