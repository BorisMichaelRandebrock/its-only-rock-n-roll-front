import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Gandalf from "./Gandalf";
import mockSongs, { mockSong } from "../../mocks/mockSongs";
import SonglistPage from "../../pages/SongListPage/SongListPage";
import { BrowserRouter } from "react-router-dom";
import SongComponent from "../Song/SongComponent";
const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

describe("Given a Gandalf component", () => {
  describe("When rendered and the user is not logged in", () => {
    test("Then it should redirect to the login page", () => {
      const loginPagePath = "/login";

      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: mockLogged },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <Gandalf>
            <p>Children</p>
          </Gandalf>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith(loginPagePath);
    });
  });
  describe("When rendered and the user is logged in", () => {
    test("Then it should render the children", () => {
      mockLogged = true;

      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: mockLogged },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <Gandalf>
            <p>Children</p>
          </Gandalf>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
    test("Then it really should render the children", () => {
      mockLogged = true;

      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: mockLogged },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <Gandalf>
            <SonglistPage songs={mockSongs} />
          </Gandalf>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Gandalf component is rendered expecting a token", () => {
  describe("When rendered and the user is not logged in", () => {
    test("Then it should redirect to the login page", () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => null),
        },
        writable: true,
      });
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "", id: "", logged: false },
        reducers: {},
      });
      const songMockSlice = createSlice({
        name: "song",
        initialState: { page: 0, songList: mockSongs },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, song: songMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Gandalf>
              <SonglistPage />
            </Gandalf>
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
  describe("When rendered and the user is logged in", () => {
    test("Then it should render the children", () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => "token"),
        },
        writable: true,
      });
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "", id: "", logged: false },
        reducers: {},
      });
      const songMockSlice = createSlice({
        name: "song",
        initialState: {
          artist: "",
          releaseDate: "",
          youtubevideo: "",
          songTitle: "",
          documents: {
            lyrics: "",
            guitarTabs: "",
            guitarChords: "",
            bassTabs: "",
            piano: "",
            drums: "",
            saxophone: "",
            trumpets: "",
          },
        },
        reducers: {
          reducer: { user: userMockSlice.reducer },
        },
      });

      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, song: songMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Gandalf>
              <SongComponent song={mockSong} />
            </Gandalf>
          </Provider>
        </BrowserRouter>
      );

      const listItem = screen.getByRole("list");

      expect(listItem).toBeInTheDocument();
    });
  });
});
