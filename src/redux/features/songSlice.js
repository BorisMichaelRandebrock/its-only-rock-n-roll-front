import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [{ artist: "bowie", songTitle: "the man who slosd the car" }],
  reducers: {
    loadSongs: (song, action) => ({ ...action.payload }),
  },
});

export const { loadSongs: loadSongsActionCreator } = songSlice.actions;

export default songSlice.reducer;
