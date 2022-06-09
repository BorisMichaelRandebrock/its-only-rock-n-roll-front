import axios from "axios";
import {
  deleteSongActionCreator,
  loadSongsActionCreator,
} from "../features/songSlice";
import { mockSongs } from "../../mocks/mockSongs";
import { deleteSongThunk, loadSongsThunk } from "./songThunks";

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

      const id = 1;

      const thunk = deleteSongThunk(id, token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test("Then the deleteSongThunkActionCreator function should be called with payload and delete-type", async () => {
      const token = "testToken";
      const dispatch = jest.fn();

      const id = 1;

      const thunk = deleteSongThunk(id, token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        payload: 1,
        type: "song/deleteSong",
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
});
