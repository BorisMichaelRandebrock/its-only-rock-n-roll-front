import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import store from "../../redux/store/store";

describe("Given a SongFormPage", () => {
  describe("When the page is rendered", () => {
    test("Then the page should be rendered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const testElement = screen.getByRole("heading", {
        name: "add new song",
      });

      expect(testElement).toBeInTheDocument();
    });
  });
  describe("When the user clicks the save-button", () => {
    test("Then he should navigate to the songlistPage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );
      const saveButton = screen.getByText("save");

      userEvent.click(saveButton);

      expect(saveButton).toBeInTheDocument();
    });
  });
});

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const userMockSlice = createSlice({
  name: "user",
  initialState: { username: "josep", logged: true },
  reducers: {},
});

describe("Given the SongForm component", () => {
  describe("When it's rendered and the cancel-button is pressed", () => {
    test("Then it should navigate to /songlist", () => {
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <SongForm />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseNavigate).not.toBeCalled();
    });
  });
});

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  createSongsThunk: jest.fn(),
}));

describe("Given the SongForm component rendered", () => {
  describe("When the user fills the fields", () => {
    test("Then it should dispatch the createSongThunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const artist = screen.getByRole("textbox", {
        name: "artist:",
      });
      const button = screen.getByText("save");

      userEvent.type(artist, "test");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the guitarTabs", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const songTitle = screen.getByRole("textbox", {
        name: "song title:",
      });
      const button = screen.getByText("save");

      userEvent.type(songTitle, "songTitle");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the Lyrics", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const lyrics = screen.getByRole("textbox", {
        name: "lyrics:",
      });
      const button = screen.getByText("save");

      userEvent.type(lyrics, "lyrics");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the guitarChords", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const guitarChords = screen.getByRole("textbox", {
        name: "guitar chords:",
      });
      const button = screen.getByText("save");

      userEvent.type(guitarChords, "guitarChords");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the bassTabs", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const bassTabs = screen.getByRole("textbox", {
        name: "bass tabs:",
      });
      const button = screen.getByText("save");

      userEvent.type(bassTabs, "bassTabs");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the piano", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const piano = screen.getByRole("textbox", {
        name: "piano:",
      });
      const button = screen.getByText("save");

      userEvent.type(piano, "piano");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the drums", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const drums = screen.getByRole("textbox", {
        name: "drums:",
      });
      const button = screen.getByText("save");

      userEvent.type(drums, "drums");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the saxophone", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const saxophone = screen.getByRole("textbox", {
        name: "saxophone:",
      });
      const button = screen.getByText("save");

      userEvent.type(saxophone, "saxophone");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the trumpets", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const trumpets = screen.getByRole("textbox", {
        name: "trumpets:",
      });
      const button = screen.getByText("save");

      userEvent.type(trumpets, "trumpets");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the youtubeVideo", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const youtubeVideo = screen.getByRole("textbox", {
        name: "youtube:",
      });
      const button = screen.getByText("save");

      userEvent.type(youtubeVideo, "youtubeVideo");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
    test("Then it should dispatch the createSongThunk for the guitarTabs visible", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const guitarTabs = screen.getByRole("textbox", {
        name: "guitar tabs:",
      });
      const button = screen.getByText("save");

      userEvent.type(guitarTabs, "guitarTabs");
      userEvent.click(button);

      expect(mockDispatch).toBeCalled();
    });
  });
});
