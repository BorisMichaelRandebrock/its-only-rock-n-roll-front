import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    loadSongs: (song, action) => [...action.payload],
    deleteSong: (song, action) =>
      song.filter((song1) => song1._id !== action.payload),
    createSong: (song, action) => [...song, action.payload],
  },
});

export const {
  loadSongs: loadSongsActionCreator,
  deleteSong: deleteSongActionCreator,
  createSong: createSongActionCreator,
} = songSlice.actions;

export default songSlice.reducer;
