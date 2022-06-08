import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";
import PageStyle from "./../PageStyle";

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
    <PageStyle>
      <div className="header-logo">
        <img
          className="logo"
          alt="logo showing an A with a guitaras the a-slash"
          src="./images/logo-a.png"
        />
        <h1>it`s only rock 'n' roll</h1>
      </div>
      <form autoComplete="off" noValidate onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={onChange}
          placeholder="name"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userData.username}
          onChange={onChange}
          placeholder="username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={userData.password}
          onChange={onChange}
          placeholder="password"
        />
        {/* <button disabled={buttonDisabled} type="submit" className="form-button">
          register
        </button> */}
        <div className="submit-button">
          <Button
            disabled={buttonDisabled}
            type="submit"
            className="form-button"
            text="register"
          />
        </div>

        <Link to="/login">
          <span>login</span>
        </Link>
      </form>
    </PageStyle>
  );
};

export default RegisterForm;
