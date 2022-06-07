import axios from "axios";
import { loadSongsActionCreator } from "../features/songSlice";
import { mockSongs } from "../../mocks/mockSongs";
import { loadSongsThunk } from "./songThunks";

describe("Given the loadSongsActionCreator function", () => {
  describe("When the loadSongsThunk function is called", () => {
    it("Then the loadSongsActionCreator function should be called", async () => {
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
