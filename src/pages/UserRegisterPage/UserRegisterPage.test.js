import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import UserRegisterPage from "./UserRegisterPage";

describe("Given a UserRegisterPage component", () => {
  describe("When the component is rendered", () => {
    test("Then the component should render the register button'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserRegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const registerForm = screen.getByRole("button");

      expect(registerForm).toBeInTheDocument();
    });
  });
});
