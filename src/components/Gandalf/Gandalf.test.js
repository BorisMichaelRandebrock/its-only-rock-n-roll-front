import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Gandalf from "./Gandalf";
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
});
