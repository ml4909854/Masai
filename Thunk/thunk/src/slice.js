import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export default userSlice.reducer;
