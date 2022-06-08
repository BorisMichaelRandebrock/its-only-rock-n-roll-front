import { /* useEffect, */ useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";
import PageStyle from "./../PageStyle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);

  const handleInputChange = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.username === "" || formValue.password === "") {
      return;
    }
    dispatch(loginThunk(formValue));
    setFormValue(initialFormValue);
    navigate("/songlist");
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
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formValue.username}
          onChange={handleInputChange}
          placeholder="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formValue.password}
          onChange={handleInputChange}
          placeholder="password"
        />
        <div className="submit-button">
          <Button type="submit" className="form-button" text="login" />
        </div>

        <Link to="/register">
          <span>register</span>
        </Link>
      </form>
    </PageStyle>
  );
};

export default LoginForm;
