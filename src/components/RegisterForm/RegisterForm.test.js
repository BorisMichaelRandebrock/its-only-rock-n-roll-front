import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const expectedLabel = "Username";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const label = screen.getByLabelText(expectedLabel);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });
  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      const nameLabel = "Name";
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const name = screen.getByLabelText(nameLabel);
      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(name, inputText);
      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
      expect(name).toHaveValue("");
    });
  });
});
