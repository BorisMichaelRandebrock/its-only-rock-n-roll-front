import axios from "axios";
import { loadSongsActionCreator } from "../features/songSlice";

const url = process.env.REACT_APP_API_URL;

export const loadSongsThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}/songs`);

  dispatch(loadSongsActionCreator(data));
};
