import { mockSongs } from "../../mocks/mockSongs";
import oneSongSlice, { loadOneSongActionCreator } from "./oneSongSlice";
import songSlice, { createSongActionCreator } from "./songSlice";
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

describe("Given a songSlice create reducer", () => {
  describe("when the reducer is called with an action of type 'createSong'", () => {
    test("Then the item should be added to the list of songs", () => {
      const expectedLength = 3;

      const initialState = mockSongs;

      const newSong = {
        artist: "David Bowie",

        youtubeVideo: "https://www.youtube.com/watch?v=u3MX-rUtS6M",

        songTitle: "the Man Who Sold The car",

        releaseDate: 4 / 11 / 1970,

        description:
          "https://en.wikipedia.org/wiki/The_Man_Who_Sold_the_World_(album)",

        documents: [
          "https://www.google.com/search?q=the+man+who+sold+the+world+chords+bowie&rlz=2C5CHFA_enES0538ES0755&sxsrf=ALiCzsZB8sjpHkuNP9bLY01ospR_kJeSSw%3A1654344350095&ei=nkqbYoG0BY3Sa8qRi5gK&gs_ssp=eJzj4tFP1zcsNjAtzs6tKDZg9FIvyUhVyE3MUyjPyFcozs9JUQAJlOcXAVnJGflFKcUKSfnlmakA_bgTHA&oq=the+man+who+sold+the+world+chords+&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCC4QywEyBQgAEMsBMgUIABDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6DwguENQCEMgDELADEEMYAToMCC4QyAMQsAMQQxgBSgQIQRgASgQIRhgAUMsEWMsEYL8aaAFwAXgAgAFoiAFokgEDMC4xmAEAoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz#wptab=s:H4sIAAAAAAAAAONgVuLRT9c3LDYwLc7OrSh-xGjOLfDyxz1hKb1Ja05eY9Tg4grOyC93zSvJLKkUkuJig7IEpPi4UDTy7GLSS0lNSyzNKYkvSUyyyk620s8tLc5M1i9KTc4vSsnMS49PziktLkktssqpLMpMLl7EqpmXWVSWmJeoUJKRqpCbmKdQnpGvUJyfkwIWKM8vArIgagF7W1DBpwAAAA",

          "https://tabs.ultimate-guitar.com/tab/david-bowie/the-man-who-sold-the-world-chords-61252",

          "https://chordseasy.com/song/27013/the-man-who-sold-the-world/",
          "String",

          "String",

          "String",

          "String",

          "String",
        ],
      };

      const createNewSong = createSongActionCreator(newSong);

      const result = songSlice(initialState, createNewSong);

      expect(result.length).toEqual(expectedLength);
    });
  });
});
