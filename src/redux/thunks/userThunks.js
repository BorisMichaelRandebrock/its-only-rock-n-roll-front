import axios from "axios";

export const registerThunk = (userData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}users/register`, userData);
};
