import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", name: "", isLoggedIn: false },
  reducers: {
    login: (state, action) => ({ ...action.payload, isLoggedIn: true }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
