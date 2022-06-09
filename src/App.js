import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import SongDetailsComponent from "./components/SongDetailsComponent/SongDetailsComponent";
import Error404Page from "./pages/Error404Page/Error404Page";
import SongCollectionPage from "./pages/SongCollectionPage/SongCollectionPage";
import SongListPage from "./pages/SongListPage/SongListPage";
import UserLoginPage from "./pages/UserLoginPage/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage/UserRegisterPage";
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
      navigate("/songlist");
    }
  }, [dispatch, navigate, logged]);

  return (
    <>
      <AppStyle>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/songlist" element={<SongListPage />} />
          <Route path="/collection" element={<SongCollectionPage />} />
          <Route path="/details" element={<SongDetailsComponent />} />
          <Route path="/404" element={<Error404Page />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
