import songSlice from "./songSlice";
import { loadSongsActionCreator } from "./songSlice";

describe("Given a songSLice reducer", () => {
  describe("when the reducer is called with an action of type 'loadSongs'", () => {
    test("then the reducer should return the payload", () => {
      const initialState = [];
      const newSong = [
        {
          name: "Song",
        },
      ];

      const loadAction = loadSongsActionCreator(newSong);

      const result = songSlice(initialState, loadAction);

      expect(result).toEqual(newSong);
    });
  });
});
