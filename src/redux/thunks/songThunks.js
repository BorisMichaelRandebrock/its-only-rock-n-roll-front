import axios from "axios";
import {
  deleteSongActionCreator,
  loadSongsActionCreator,
  loadOneSongActionCreator,
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
  const { status } = await axios.get(url);

  if (status === 200) {
    dispatch(loadOneSongActionCreator(id));
  }
};
