import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "oneSong",
  initialState: {},
  reducers: {
    loadOneSong: (song, action) => ({ ...action.payload }),
  },
});

export const { loadOneSong: loadOneSongActionCreator } = songSlice.actions;

export default songSlice.reducer;
