import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";

export const registerThunk = (userData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}user/register`, userData);
};

export const loginThunk = (userData) => async (dispatch) => {
  const { data, status } = await axios.post(
    `${process.env.REACT_APP_API_URL}user/login`,
    userData
  );

  if (status === 200) {
    const { id, username } = jwtDecode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(loginActionCreator({ id, username }));
  }
};
