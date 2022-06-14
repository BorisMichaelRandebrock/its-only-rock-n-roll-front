import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSongThunk } from "../../redux/thunks/songThunks";
import SongListStyles from "./SongFormStyle";

const SongForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialForm = {
    artist: "",
    youtubevideo: "",
    songTitle: "",
    documents: [
      {
        lyrics: "",
        guitarTabs: "",
        guitarChords: "",
        bassTabs: "",
        piano: "",
        drums: "",
        saxophone: "",
        trumpets: "",
      },
    ],
  };

  const [formData, setFormData] = useState(initialForm);

  const updateDataInput = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    await dispatch(createSongThunk(formData));

    setFormData(initialForm);
    navigate("/songlist");
  };

  return (
    <SongListStyles>
      <div className="song-form__container">
        <h1>add new song</h1>
        <form onSubmit={register} autoComplete="off" noValidate>
          <label htmlFor="artist">
            artist:
            <input
              type="text"
              id="artist"
              value={formData.artist}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <span />
          <label htmlFor="songTitle">
            songTitle:
            <input
              type="text"
              id="songTitle"
              value={formData.songTitle}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="releaseDate">
            releaseDate:
            <input
              type="text"
              id="releaseDate"
              value={formData.releaseDate}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="lyrics">
            lyrics:
            <input
              type="text"
              id="lyrics"
              value={formData.lyrics}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="guitarTabs">
            guitar tabs:
            <input
              type="text"
              id="guitarTabs"
              value={formData.guitarTabs}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="guitarChords">
            guitar chords:
            <input
              type="text"
              id="guitarChords"
              value={formData.guitarChords}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="bassTabs">
            bass tabs:
            <input
              type="text"
              id="bassTabs"
              value={formData.bassTabs}
              onChange={updateDataInput}
              placeholder="url::"
            />
          </label>
          <label htmlFor="piano">
            piano:
            <input
              type="text"
              id="piano"
              value={formData.documents.piano}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="drums">
            drums:
            <input
              type="text"
              id="drums"
              value={formData.documents.drums}
              onChange={updateDataInput}
              placeholder="url::"
            />
          </label>
          <label htmlFor="saxophone">
            saxophone:
            <input
              type="text"
              id="saxophone"
              value={formData.saxophone}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="trumpets">
            trumpets:
            <input
              type="text"
              id="trumpets"
              value={formData.trumpets}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <label htmlFor="youtubeVideo">
            youtube:
            <input
              type="text"
              id="youtubeVideo"
              value={formData.youtubeVideo}
              onChange={updateDataInput}
              placeholder="url:"
            />
          </label>
          <button className="song-form__button" type="submit">
            save
          </button>

          <button className="song-form__button-cancel" type="submit">
            cancel
          </button>
        </form>
      </div>
    </SongListStyles>
  );
};

export default SongForm;
