import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import UserLoginPage from "./UserLoginPage";

describe("Given a UserLoginPage component", () => {
  describe("When the component is rendered", () => {
    test("Then the component should render the login button'", () => {
      render(
        <Provider store={store}>
          <UserLoginPage />
        </Provider>
      );

      const loginForm = screen.getByRole("button");

      expect(loginForm).toBeInTheDocument();
    });
  });
});
