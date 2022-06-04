import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the component is receiving the input 'Hello'", () => {
    test("Then the username input value should be 'Hello'", () => {
      const labelToFind = "Username";
      const value = "Hello";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, value);

      expect(label).toHaveValue(value);
    });
  });
  describe("When the two inpputs have been filled and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      // const nameLabel = "Name";
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
    });
  });
  describe("When the username is Boo", () => {
    test("Then the username input should be Boo", () => {
      const usernameLabel = "Username";
      const inputText = "Boo";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);

      userEvent.click(submitButton);

      expect(username).toHaveValue(inputText);
    });
  });
  describe("When the username and password introduced are submitted and correct", () => {
    test("Then the user should be logged in", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "Boo";
      const inputText2 = "123";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText2);
      userEvent.click(submitButton);
    });
  });
});
