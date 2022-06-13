import { mockSongs } from "../../mocks/mockSongs";
import oneSongSlice, { loadOneSongActionCreator } from "./oneSongSlice";

describe("Given a songSlice getOne reducer", () => {
  describe("when the reducer is called with an action of type 'loadOneSong'", () => {
    test("Then the requested item should be should shown", () => {
      const initialState = {};
      const expectedState = mockSongs[0];

      const getSong = loadOneSongActionCreator(mockSongs[0]);

      const result = oneSongSlice(initialState, getSong);

      expect(result).toEqual(expectedState);
    });
  });
});
