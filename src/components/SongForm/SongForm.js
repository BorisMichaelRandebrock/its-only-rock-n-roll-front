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
    releaseDate: "",
    youtubevideo: "",
    songTitle: "",
    documents: {
      lyrics: "",
      guitarTabs: "",
      guitarChords: "",
      bassTabs: "",
      piano: "",
      drums: "",
      saxophone: "",
      trumpets: "",
    },
  };

  const [formData, setFormData] = useState(initialForm);

  const updateDataInput = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateLyrics = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, lyrics: event.target.value },
    });
  };

  const updateGuitarTabs = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, guitarTabs: event.target.value },
    });
  };

  const updateGuitarChords = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, guitarChords: event.target.value },
    });
  };

  const updateBassTabs = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, bassTabs: event.target.value },
    });
  };

  const updatePiano = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, piano: event.target.value },
    });
  };

  const updateDrums = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, drums: event.target.value },
    });
  };

  const updateSaxophone = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, saxophone: event.target.value },
    });
  };

  const updateTrumpets = (event) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, trumpets: event.target.value },
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
              placeholder="artist: "
            />
          </label>
          <span />
          <label htmlFor="songTitle">
            song title:
            <input
              type="text"
              id="songTitle"
              value={formData.songTitle}
              onChange={updateDataInput}
              placeholder="song title: "
            />
          </label>
          <label htmlFor="releaseDate">
            release date:
            <input
              type="text"
              id="releaseDate"
              value={formData.releaseDate}
              onChange={updateDataInput}
              placeholder="date: "
            />
          </label>
          <label htmlFor="lyrics">
            lyrics:
            <input
              type="text"
              id="lyrics"
              value={formData.documents.lyrics}
              onChange={updateLyrics}
              placeholder="url:"
            />
          </label>
          <label htmlFor="guitarTabs">
            guitar tabs:
            <input
              type="text"
              id="guitarTabs"
              value={formData.documents.guitarTabs}
              onChange={updateGuitarTabs}
              placeholder="url:"
            />
          </label>
          <label htmlFor="guitarChords">
            guitar chords:
            <input
              type="text"
              id="guitarChords"
              value={formData.documents.guitarChords}
              onChange={updateGuitarChords}
              placeholder="url:"
            />
          </label>
          <label htmlFor="bassTabs">
            bass tabs:
            <input
              type="text"
              id="bassTabs"
              value={formData.documents.bassTabs}
              onChange={updateBassTabs}
              placeholder="url::"
            />
          </label>
          <label htmlFor="piano">
            piano:
            <input
              type="text"
              id="piano"
              value={formData.documents.piano}
              onChange={updatePiano}
              placeholder="url:"
            />
          </label>
          <label htmlFor="drums">
            drums:
            <input
              type="text"
              id="drums"
              value={formData.documents.drums}
              onChange={updateDrums}
              placeholder="url::"
            />
          </label>
          <label htmlFor="saxophone">
            saxophone:
            <input
              type="text"
              id="saxophone"
              value={formData.documents.saxophone}
              onChange={updateSaxophone}
              placeholder="url:"
            />
          </label>
          <label htmlFor="trumpets">
            trumpets:
            <input
              type="text"
              id="trumpets"
              value={formData.documents.trumpets}
              onChange={updateTrumpets}
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
