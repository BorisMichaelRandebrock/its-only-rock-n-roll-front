import Button from "../Button/Button";
import SongStyle from "../Song/SongStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongThunk } from "../../redux/thunks/songThunks";

const SongDetailsComponent = () => {
  const dispatch = useDispatch();

  const song = useSelector((state) => state.oneSong);

  const handleDelete = () => {
    dispatch(deleteSongThunk(song.id));
  };

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
            {song.documents.map((document, index) => (
              <li className="song-detail__document">
                <p className="song-detail__lyrics">{`${document}: ${document}`}</p>
              </li>
            ))}
            <li className="song-detail__youtube">
              <video src={`${song.youtubevideo}`}></video>
            </li>
            <li className="song-details__button">
              <Button text="edit" styleType="primary" />
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
