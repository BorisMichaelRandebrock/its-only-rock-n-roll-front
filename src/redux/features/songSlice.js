import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    loadSongs: (song, action) => [...action.payload],
    deleteSong: (song, action) =>
      song.filter((song) => song._id !== action.payload),
    loadOneSong: (song, action) =>
      song.filter((song) => song._id === action.payload),
  },
});

export const {
  loadSongs: loadSongsActionCreator,
  deleteSong: deleteSongActionCreator,
  loadOneSong: loadOneSongActionCreator,
} = songSlice.actions;

export default songSlice.reducer;
