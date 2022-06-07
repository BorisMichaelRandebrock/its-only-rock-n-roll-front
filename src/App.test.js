import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "josep",
  username: "josep",
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should navigate to /songlist", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: "josep", logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/songlist");
    });
  });
});
