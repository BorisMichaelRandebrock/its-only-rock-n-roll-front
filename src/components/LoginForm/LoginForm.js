import { /* useEffect, */ useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginFormStyle from "./../PageStyle";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  // const [buttonDisabled /* setButtonDisabled */] = useState(initialFormValue);

  /*  useEffect(() => {
    if (formValue.username !== "" && formValue.name) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formValue]); */

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
    <LoginFormStyle>
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
        <button
          type="submit"
          /* disabled={buttonDisabled} */ className="form-button"
        >
          Login
        </button>

        <Link to="/register">
          <span>register</span>
        </Link>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
