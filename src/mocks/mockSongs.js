const mockSong = {
  artist: "David Bowie",

  youtubeVideo: "https://www.youtube.com/watch?v=u3MX-rUtS6M",

  songTitle: "theManWhoSoldTheWorld",

  releaseDate: 4 / 11 / 1970,

  description:
    "https://en.wikipedia.org/wiki/The_Man_Who_Sold_the_World_(album)",

  documents: {
    lyrics:
      "https://www.google.com/search?q=the+man+who+sold+the+world+chords+bowie&rlz=2C5CHFA_enES0538ES0755&sxsrf=ALiCzsZB8sjpHkuNP9bLY01ospR_kJeSSw%3A1654344350095&ei=nkqbYoG0BY3Sa8qRi5gK&gs_ssp=eJzj4tFP1zcsNjAtzs6tKDZg9FIvyUhVyE3MUyjPyFcozs9JUQAJlOcXAVnJGflFKcUKSfnlmakA_bgTHA&oq=the+man+who+sold+the+world+chords+&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCC4QywEyBQgAEMsBMgUIABDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6DwguENQCEMgDELADEEMYAToMCC4QyAMQsAMQQxgBSgQIQRgASgQIRhgAUMsEWMsEYL8aaAFwAXgAgAFoiAFokgEDMC4xmAEAoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz#wptab=s:H4sIAAAAAAAAAONgVuLRT9c3LDYwLc7OrSh-xGjOLfDyxz1hKb1Ja05eY9Tg4grOyC93zSvJLKkUkuJig7IEpPi4UDTy7GLSS0lNSyzNKYkvSUyyyk620s8tLc5M1i9KTc4vSsnMS49PziktLkktssqpLMpMLl7EqpmXWVSWmJeoUJKRqpCbmKdQnpGvUJyfkwIWKM8vArIgagF7W1DBpwAAAA",

    guitarTabs:
      "https://tabs.ultimate-guitar.com/tab/david-bowie/the-man-who-sold-the-world-chords-61252",

    guitarChords:
      "https://chordseasy.com/song/27013/the-man-who-sold-the-world/",
    bassTabs: "String",

    piano: "String",

    drums: "String",

    saxophone: "String",

    trumpets: "String",
  },
};

const mockSongs = [
  {
    artist: {
      type: "David Bowie",
      require: true,
    },
    youtubeVideo: {
      type: "https://www.youtube.com/watch?v=u3MX-rUtS6M",
    },
    songTitle: {
      type: "theManWhoSoldTheWorld",
    },
    releaseDate: {
      type: 4 / 11 / 1970,
    },
    description: {
      type: "https://en.wikipedia.org/wiki/The_Man_Who_Sold_the_World_(album)",
    },
    documents: {
      lyrics: {
        type: "https://www.google.com/search?q=the+man+who+sold+the+world+chords+bowie&rlz=2C5CHFA_enES0538ES0755&sxsrf=ALiCzsZB8sjpHkuNP9bLY01ospR_kJeSSw%3A1654344350095&ei=nkqbYoG0BY3Sa8qRi5gK&gs_ssp=eJzj4tFP1zcsNjAtzs6tKDZg9FIvyUhVyE3MUyjPyFcozs9JUQAJlOcXAVnJGflFKcUKSfnlmakA_bgTHA&oq=the+man+who+sold+the+world+chords+&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCC4QywEyBQgAEMsBMgUIABDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6DwguENQCEMgDELADEEMYAToMCC4QyAMQsAMQQxgBSgQIQRgASgQIRhgAUMsEWMsEYL8aaAFwAXgAgAFoiAFokgEDMC4xmAEAoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz#wptab=s:H4sIAAAAAAAAAONgVuLRT9c3LDYwLc7OrSh-xGjOLfDyxz1hKb1Ja05eY9Tg4grOyC93zSvJLKkUkuJig7IEpPi4UDTy7GLSS0lNSyzNKYkvSUyyyk620s8tLc5M1i9KTc4vSsnMS49PziktLkktssqpLMpMLl7EqpmXWVSWmJeoUJKRqpCbmKdQnpGvUJyfkwIWKM8vArIgagF7W1DBpwAAAA",
      },
      guitarTabs: {
        type: "https://tabs.ultimate-guitar.com/tab/david-bowie/the-man-who-sold-the-world-chords-61252",
      },
      guitarChords: {
        type: "https://chordseasy.com/song/27013/the-man-who-sold-the-world/",
      },
      bassTabs: {
        type: String,
      },
      piano: {
        type: String,
      },
      drums: {
        type: String,
      },
      saxophone: {
        type: String,
      },
      trumpets: {
        type: String,
      },
    },
  },
  {
    artist: {
      type: "The Beatles",
      require: true,
    },
    youtubeVideo: {
      type: "https://www.youtube.com/watch?v=rp7dMLeSTT0",
    },
    songTitle: {
      type: "whilemyguitargentlyweeps",
    },
    releaseDate: {
      type: 22 / 11 / 1968,
    },
    description: {
      type: "https://en.wikipedia.org/wiki/While_My_Guitar_Gently_Weeps",
    },
    documents: {
      lyrics: {
        type: "https://www.google.com/search?q=while.my+guitar+gently+weeps&rlz=2C5CHFA_enES0538ES0755&oq=while&aqs=chrome.1.69i57j35i39l2j0i512l2j0i20i263i512j0i512j46i512j0i512l2.3981j0j9&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLRT9c3LDTNSjEzMS97xGjOLfDyxz1hKb1Ja05eY9Tg4grOyC93zSvJLKkUkuJig7IEpPi4UDTy7GLSS0lNSyzNKYkvSUyyyk620s8tLc5M1i9KTc4vSsnMS49PziktLkktssqpLMpMLl7Eql-SkaqQlJpYkpNarFCekZmTqpBbqZBemlmSWKSQnppXklOpUJ6aWlCsANEBAKiaiOWtAAAA",
      },
      guitarTabs: {
        type: "https://tabs.ultimate-guitar.com/tab/the-beatles/while-my-guitar-gently-weeps-chords-17446",
      },
      guitarChords: {
        type: "https://tabs.ultimate-guitar.com/tab/the-beatles/while-my-guitar-gently-weeps-chords-17446",
      },
      bassTabs: {
        type: String,
      },
      piano: {
        type: "https://musescore.com/user/28597252/scores/5155104",
      },
      drums: {
        type: String,
      },
      saxophone: {
        type: String,
      },
      trumpets: {
        type: String,
      },
    },
  },
];

module.exports = { mockSong, mockSongs };
