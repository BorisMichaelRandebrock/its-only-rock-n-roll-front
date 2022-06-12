import Button from "../Button/Button";
import SongStyle from "../Song/SongStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongThunk } from "../../redux/thunks/songThunks";

// releaseDate,
// lyrics,
// guitarChords,
// guitarTabs,
// piano,
// drums,
// saxophone,
// trumpets,
// releaseDate

const SongDetailsComponent = ({ song }) => {
  const dispatch = useDispatch();
  //const song = useSelector((state) => state.song);
  //const songDetails = songs.find((song) => song.id === songId);

  const handleDelete = () => {
    dispatch(deleteSongThunk(song.id));
  };

  return (
    <SongStyle song={song}>
      <ul className="song-collection">
        <li className="song-container__songtitle">
          <span className="material-symbols-rounded">music_note</span>
          <h2 className="song-collection__title">{`${song.songTitle}`}</h2>
        </li>
        <li className="song-collection__song">
          <span className="material-symbols-rounded">person</span>
          <h3 className="song-collection__artist">{`${song.artist}`}</h3>
        </li>
        <li className="song-collection__button">
          <Button text="i'll take it!" styleType="primary" />
          <button className="secondary" onClick={handleDelete}>
            delete
          </button>
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongDetailsComponent;

{
  /* <li>
  <p>lyrics: `${lyrics}`</p>
</li>
<li>
  <p>guitar chords: `${documents.guitarChords}'</p>
</li>
<li>
  <p>guitar tabs: `${documents.guitarTabs}`</p>
</li>
<li>
  <p>piano: `${documents.piano}`</p>
</li>
<li>
  <p>drums: `${documents.drums}`</p>
</li>
<li>
  <p>saxophone: `${documents.saxophone}`</p>
</li>
<li>
  <p>trumpets: `${documents.trumpets}`</p>
</li>
<li>
  <video src=""></video>
</li> */
}
