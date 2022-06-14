import axios from "axios";
import {
  correctAction,
  loading,
  loadingOff,
  wrongAction,
} from "../../modals/modals";
import { loadOneSongActionCreator } from "../features/oneSongSlice";
import {
  deleteSongActionCreator,
  loadSongsActionCreator,
} from "../features/songSlice";

const url = process.env.REACT_APP_API_URL;

export const loadSongsThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}songs`);
  loading("Loading songs...");
  dispatch(loadSongsActionCreator(data));
  loadingOff();
};

export const deleteSongThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs/${id}`;
  const { status } = await axios.delete(url);

  if (status === 200) {
    dispatch(deleteSongActionCreator(id));
    correctAction("song deleted successfully!");
  } else {
    wrongAction("error deleting song!");
  }
};

export const loadOneSongThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs/${id}`;
  try {
    const { data } = await axios.get(url);
    dispatch(loadOneSongActionCreator(data.song));
    correctAction("song loaded successfully!");
  } catch (error) {
    wrongAction("error loading song!");
  }
};

export const createSongThunk = (song) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}songs`;

  try {
    const { data } = await axios.post(url, song);
    dispatch(loadSongsActionCreator(data.song));
    correctAction("song created successfully!");
  } catch (error) {
    wrongAction("error creating song!");
  }
};
