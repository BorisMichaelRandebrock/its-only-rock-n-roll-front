import songSlice from "./songSlice";
import {
  loadSongsActionCreator,
  deleteSongActionCreator,
  loadOneSongActionCreator,
} from "./songSlice";

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
    test("Then the item should be should shown", () => {
      const initialState = [
        { _id: 1, name: "Song" },
        { _id: 2, name: "Song2" },
        { _id: 3, name: "Song3" },
      ];
      const expectedState = [{ _id: 1, name: "Song" }];

      const getSong = loadOneSongActionCreator(1);

      const result = songSlice(initialState, getSong);

      expect(result).toEqual(expectedState);
    });
  });
});
