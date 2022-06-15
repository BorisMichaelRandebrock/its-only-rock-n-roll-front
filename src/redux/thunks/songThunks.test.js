import axios from "axios";
import {
  deleteSongActionCreator,
  loadSongsActionCreator,
} from "../features/songSlice";
import { mockSongs } from "../../mocks/mockSongs";
import {
  createSongThunk,
  deleteSongThunk,
  loadOneSongThunk,
  loadSongsThunk,
} from "./songThunks";
import * as toasters from "../../modals/modals";

describe("Given the loadSongsActionCreator function", () => {
  describe("When the loadSongsThunk function is called", () => {
    test("Then the loadSongsActionCreator function should be called", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { data: mockSongs };
      axios.get = jest.fn().mockResolvedValue(response);

      const expectedAction = loadSongsActionCreator(mockSongs);

      const thunk = loadSongsThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the deleteSongThunk function", () => {
  describe("When it is called", () => {
    test("Then the deleteSongThunkActionCreator function should be called", async () => {
      const token = "testToken";
      const dispatch = jest.fn();

      const response = { data: mockSongs, status: 200 };
      axios.delete = jest.fn().mockResolvedValue(response);

      const expectedAction = deleteSongActionCreator(mockSongs[0].id);

      const thunk = deleteSongThunk(mockSongs[0].id, token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
  test("Then the deleteSongThunkActionCreator function should be called with the statusCode 200", async () => {
    const id = 2;
    const dispatch = jest.fn();
    const action = deleteSongActionCreator(id);

    jest.spyOn(Storage.prototype, "getItem").mockRejectedValue(true);
    axios.delete = jest.fn().mockResolvedValue({ status: 200 });

    const thunk = deleteSongThunk(id);
    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledWith(action);
  });
});

describe("Given the loadOneSongThunk function", () => {
  describe("When it is called", () => {
    test("Then the loadOneSongThunkActionCreator function should be called", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { data: mockSongs[0], status: 200 };

      axios.get = jest.fn().mockResolvedValue(response);

      const thunk = loadOneSongThunk(mockSongs[0].id, token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the createSongThunk function", () => {
  describe("When it is called", () => {
    test("Then the createSongThunkActionCreator function should be called", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { data: mockSongs[0], status: 200 };

      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = createSongThunk(mockSongs[0], token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the createSongActionCreator function", () => {
  describe("When the createSongThunk is invoked but an error occurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.post = jest.fn().mockRejectedValueOnce(new Error());
      const dispatch = jest.fn();

      const thunk = await createSongThunk(mockSongs[0], "testToken");
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith("error creating song!");
    });
  });
});

describe("Given the deleteSongThunk toast", () => {
  describe("When the deleteSongThunk is invoked but an error occurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.delete = jest.fn().mockReturnValueOnce({
        status: 404,
      });
      const dispatch = jest.fn();

      const thunk = deleteSongThunk("id");
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith("error deleting song!");
    });
  });
});

describe("Gine the loadSongThunk", () => {
  describe("When invoked but an error occurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.load = jest.fn().mockReturnValueOnce({
        status: 404,
      });
      const dispatch = jest.fn();

      const thunk = loadOneSongThunk("id");
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith("error loading song!");
    });
  });
});
