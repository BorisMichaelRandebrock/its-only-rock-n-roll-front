import { mockSongs } from "../../mocks/mockSongs";
import oneSongSlice, { loadOneSongActionCreator } from "./oneSongSlice";
import songSlice from "./songSlice";
import { loadSongsActionCreator, deleteSongActionCreator } from "./songSlice";

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

describe("Given a songSLice delete reducer", () => {
  describe("when the reducer is called with an action of type 'deleteSong'", () => {
    test("Then the item should be removed from the array", () => {
      const initialState = [{ _id: 1, name: "Song" }];
      const expectedState = [];

      const deleteAction = deleteSongActionCreator(1);

      const result = songSlice(initialState, deleteAction);

      expect(result).toEqual(expectedState);
    });
  });
});

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
