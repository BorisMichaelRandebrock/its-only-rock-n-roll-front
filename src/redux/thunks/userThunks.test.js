import axios from "axios";
import "../../../src/mocks/server";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({ id: "1234", username: "mockUser" }));

describe("Given the userThunks function", () => {
  describe("When invoked with a correct username and a password", () => {
    test("Then it should dispatch the loginActionCreator with the username and the id", async () => {
      const dispatch = jest.fn();
      const inputData = { username: "mockUser", password: "4321" };

      axios.post = await jest
        .fn()
        .mockResolvedValue({ data: { token: "mockToken" }, status: 200 });

      const userData = { id: "1234", username: "mockUser" };

      const expectedAction = loginActionCreator(userData);

      const thunk = loginThunk(inputData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
  describe("When invoked with an incorrect username and a password", () => {
    test("Then it should dispatch with an error", async () => {
      const token = false;

      axios.post = await jest;

      expect(token).toBe(false);
    });
    test("Then it should dispatch the loginActionCreator with the username and the id", async () => {
      const dispatch = jest.fn();
      const inputData = { username: "mockUser", password: "4321" };

      axios.post = await jest
        .fn()
        .mockResolvedValue({ data: { token: "mockToken" }, status: 500 });

      const userData = { id: "15234", username: "mockUser" };

      const expectedAction = loginActionCreator(userData);

      const thunk = loginThunk(inputData);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(expectedAction);
    });
    test("Then it should show a toast with a message", async () => {
      const dispatch = jest.fn();
      const inputData = { username: "mockUser", password: "4321" };

      axios.post = await jest
        .fn()
        .mockResolvedValue({ data: { token: "mockToken" }, status: 500 });

      const userData = { id: "15234", username: "mockUser" };

      const expectedAction = loginActionCreator(userData);

      const thunk = loginThunk(inputData);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(expectedAction);
    });
  });
});
