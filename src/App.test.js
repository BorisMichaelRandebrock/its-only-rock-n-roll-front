import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

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

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
  describe("When a user is logged in", () => {
    test("Then it should render the login button", () => {
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

      const testElement = screen.getByRole("button", {
        name: "login",
      });

      expect(testElement).toBeInTheDocument();
    });
    test("Then it should dispatch the loginActionCreator", () => {
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

      const testElement = screen.getByRole("button", {
        name: "login",
      });

      userEvent.click(testElement);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
    test("Then it should", () => {
      const MockEffect = jest.fn();
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

      const testElement = screen.getByRole("button", {
        name: "login",
      });

      userEvent.click(testElement);

      expect(MockEffect).not.toHaveBeenCalled();
    });
  });
});

describe("Given the App component", () => {
  describe("When rendered and a user is logged", () => {
    test("Then it should navigate to /songlist", () => {
      const mockUseNavigate = jest.fn();

      jest.mock("react-router-dom", () => ({
        useNavigate: () => mockUseNavigate,
      }));

      let mockLogged = false;

      const logginButton = "/songlist";
      // userEvent().click(logginButton);

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
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseNavigate).not.toHaveBeenCalledWith(logginButton);
    });
  });
});
