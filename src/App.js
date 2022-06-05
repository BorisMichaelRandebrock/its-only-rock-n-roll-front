import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Error404Page from "./pages/Error404Page/Error404Page";
import { loginActionCreator } from "./redux/features/userSlice";

const AppStyle = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      navigate("/");
    }
  }, [dispatch, navigate, logged]);

  return (
    <>
      <AppStyle>
        <h1>it`s only rock 'n' roll</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
