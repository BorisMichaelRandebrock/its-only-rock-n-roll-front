import axios from "axios";
import { loadOneSongActionCreator } from "../features/oneSongSlice";
import {
  deleteSongActionCreator,
  loadSongsActionCreator,
} from "../features/songSlice";

const url = process.env.REACT_APP_API_URL;

export const loadSongsThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}songs`);
  dispatch(loadSongsActionCreator(data));
};

export const deleteSongThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs/${id}`;
  const { status } = await axios.delete(url);

  if (status === 200) {
    dispatch(deleteSongActionCreator(id));
  }
};

export const loadOneSongThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs/${id}`;
  try {
    const { data } = await axios.get(url);
    dispatch(loadOneSongActionCreator(data.song));
  } catch (error) {}
};

export const createSongThunk = (song) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs`;

  try {
    const { data } = await axios.post(url, song);
    dispatch(loadSongsActionCreator(data.song));
  } catch (error) {}
};
