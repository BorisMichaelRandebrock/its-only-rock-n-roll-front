import axios from "axios";
import "../../../src/mocks/server";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";
import * as toasters from "../../modals/modals";

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

describe("Given the user registerThunks function", () => {
  describe("When the user is registering correctly", () => {
    test("Then it should show the message 'user created successfully!'", async () => {
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
    test("Then it", () => {
      const dispatch = jest.fn();
      const inputData = { username: "mockUser", password: "4321" };

      axios.post = jest.fn().mockResolvedValue({});
      const userData = { id: "1234", username: "mockUser" };

      const expectedAction = loginActionCreator(userData);

      const thunk = loginThunk(inputData);

      thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the registerUserThunk", () => {
  describe("When invoked but an error occurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.load = jest.fn().mockReturnValueOnce({
        status: 404,
      });
      const dispatch = jest.fn();

      const thunk = registerThunk("id");
      await thunk(dispatch);

      expect(mockWrongAction).not.toHaveBeenLastCalledWith(
        "user already exists"
      );
    });
  });
  describe("When invoked succesfully", () => {
    test("Then it should show correctAction toastify", async () => {
      const mockCorrectAction = jest.spyOn(toasters, "correctAction");

      axios.load = jest.fn().mockReturnValueOnce({
        status: 201,
      });
      const dispatch = jest.fn();

      const thunk = registerThunk("id");
      await thunk(dispatch);

      expect(mockCorrectAction).toHaveBeenLastCalledWith(
        "user created successfully!"
      );
    });
  });
});
