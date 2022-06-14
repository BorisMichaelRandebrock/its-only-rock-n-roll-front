import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import Error404Page from "./pages/Error404Page/Error404Page";
import SongCollectionPage from "./pages/SongCollectionPage/SongCollectionPage";
import SongListPage from "./pages/SongListPage/SongListPage";
import UserLoginPage from "./pages/UserLoginPage/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage/UserRegisterPage";
import { loginActionCreator } from "./redux/features/userSlice";
import SongDetailsPage from "./pages/SongDetailsPage/SongDetailsPage";
import { loadSongsThunk } from "./redux/thunks/songThunks";
import SongFormPage from "./pages/SongFormPage/SongFormPage";

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
    if (token) {
      const { username } = jwtDecode(token);
      dispatch(loginActionCreator({ username }));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, logged]);

  useEffect(() => {
    dispatch(loadSongsThunk());
  }, [dispatch]);

  return (
    <>
      <AppStyle>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/songlist" element={<SongListPage />} />
          <Route path="/collection" element={<SongCollectionPage />} />
          <Route path="/details/:id" element={<SongDetailsPage />} />
          <Route path="/form" element={<SongFormPage />} />
          <Route path="/404" element={<Error404Page />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
