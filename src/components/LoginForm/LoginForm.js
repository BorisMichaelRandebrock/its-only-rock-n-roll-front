import { /* useEffect, */ useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginFormStyle from "./LoginFormStyle";

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
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formValue.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formValue.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button
          type="submit"
          /* disabled={buttonDisabled} */ className="form-button"
        >
          Login
        </button>

        <Link to="/register">register</Link>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
