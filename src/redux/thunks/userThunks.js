import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction, wrongAction } from "../../modals/modals";
import { loginActionCreator } from "../features/userSlice";

export const registerThunk = (userData) => async (dispatch) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}user/register`, userData);
    correctAction("user created successfully!");
  } catch (error) {
    wrongAction("user already exists!");
  }
};

export const loginThunk = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/login`,
      userData
    );

    const username = jwtDecode(data.token);
    localStorage.setItem("token", data.token);

    dispatch(loginActionCreator(username));
    correctAction("user logged in successfully!");
  } catch (error) {
    wrongAction("wrong username or password!");
  }
};
