import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import UserLoginPage from "./UserLoginPage";

describe("Given a UserLoginPage component", () => {
  describe("When the component is rendered", () => {
    test("Then the component should render the login button'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserLoginPage />
          </Provider>
        </BrowserRouter>
      );

      const loginForm = screen.getByRole("button");

      expect(loginForm).toBeInTheDocument();
    });
  });
});
