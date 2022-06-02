import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState(blankFields);

  useEffect(() => {
    if (
      userData.username !== "" &&
      userData.password !== "" &&
      userData.name !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [userData]);

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerThunk(userData));
    setUserData(blankFields);
  };

  return (
    <RegisterFormStyle>
      <form autoComplete="off" noValidate onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={onChange}
          placeholder="Name"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userData.username}
          onChange={onChange}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={userData.password}
          onChange={onChange}
          placeholder="Password"
        />
        <button disabled={buttonDisabled} type="submit" className="form-button">
          register
        </button>
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
