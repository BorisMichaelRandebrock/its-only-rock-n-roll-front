import { /* useEffect, */ useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import PageStyle from "./../PageStyle";

const LoginForm = () => {
  const dispatch = useDispatch();

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
  };

  return (
    <PageStyle>
      <img
        className="logo"
        alt="logo showing an A with a guitaras the a-slash"
        src="./images/logo-a.png"
      />
      <h1>it`s only rock 'n' roll</h1>
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
        <button type="submit" className="form-button">
          Login
        </button>

        <Link to="/register">
          <span>register</span>
        </Link>
      </form>
    </PageStyle>
  );
};

export default LoginForm;
