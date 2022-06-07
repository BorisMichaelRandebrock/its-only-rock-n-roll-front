import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import songReducer from "../features/songSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
  },
});

export default store;
