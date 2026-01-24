import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});
const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    items: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { addUsers } = usersSlice.actions;
export default usersSlice.reducer;
