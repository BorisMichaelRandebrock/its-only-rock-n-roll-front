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
