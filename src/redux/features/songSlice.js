import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    loadSongs: (song, action) => [...action.payload],
    deleteSong: (song, action) =>
      song.filter((song) => song.id !== action.payload),
  },
});

export const {
  loadSongs: loadSongsActionCreator,
  deleteSong: deleteSongActionCreator,
} = songSlice.actions;

export default songSlice.reducer;
