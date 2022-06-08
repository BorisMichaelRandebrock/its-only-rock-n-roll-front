import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    loadSongs: (song, action) => [...action.payload],
  },
});

export const { loadSongs: loadSongsActionCreator } = songSlice.actions;

export default songSlice.reducer;
