import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import songReducer from "../features/songSlice";
import oneSongReducer from "../features/oneSongSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
    oneSong: oneSongReducer,
  },
});

export default store;
