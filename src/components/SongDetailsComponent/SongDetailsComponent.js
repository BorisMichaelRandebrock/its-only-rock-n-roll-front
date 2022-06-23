import Button from "../Button/Button";
import SongStyle from "../Song/SongStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongThunk } from "../../redux/thunks/songThunks";
import { useNavigate } from "react-router-dom";

const SongDetailsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const song = useSelector((state) => state.oneSong);

  const handleDelete = () => {
    dispatch(deleteSongThunk(song.id));
  };

  const goToSonglistPage = () => {
    navigate("/songlist");
  };

  // const deleteAndGoToSonglistPage = () => {
  //   handleDelete();
  //   goToSonglistPage();
  // };

  return (
    <SongStyle>
      {song.artist && (
        <>
          <h1 className="songDetail-header">details</h1>
          <ul className="song-collection">
            <li className="song-container__songtitle">
              <span className="material-symbols-rounded">music_note</span>
              <h2 className="song-collection__title">{`${song.songTitle}`}</h2>
            </li>
            <li className="song-detail__song">
              <span className="material-symbols-rounded">person</span>
              <h3 className="song-detail__artist">{`${song.artist}`}</h3>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__release">
                release date: {`${song.releaseDate}`}
              </p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__lyrics">{`lyrics: ${song.documents.lyrics}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__guitarTabs">{`guitar tabs: ${song.documents.guitarTabs}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__guitarChords">{`guitar chords: ${song.documents.guitarChords}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__bassTabs">{`bass tabs: ${song.documents.bassTabs}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__piano">{`piano: ${song.documents.piano}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__drums">{`drums: ${song.documents.drums}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__saxophone">{`saxophone: ${song.documents.saxophone}`}</p>
            </li>
            <li className="song-detail__document">
              <p className="song-detail__trumpets">{`trumpets: ${song.documents.trumpets}`}</p>
            </li>

            <li className="song-detail__youtube">
              <video src={`${song.youtubevideo}`}></video>
            </li>
            <li className="song-details__button">
              <Button
                text="home"
                styleType="primary"
                action={goToSonglistPage}
              />
              <button className="secondary" onClick={handleDelete}>
                delete
              </button>
            </li>
          </ul>
        </>
      )}
    </SongStyle>
  );
};

export default SongDetailsComponent;
