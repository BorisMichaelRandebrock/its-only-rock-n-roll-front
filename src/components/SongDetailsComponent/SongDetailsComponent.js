// import SongStyle from "./SongStyle";
import Button from "../Button/Button";
import SongStyle from "../Song/SongStyle";

const SongDetailsComponent = ({
  song: {
    artist,
    songTitle,
    releaseDate,
    lyrics,
    guitarChords,
    guitarTabs,
    piano,
    drums,
    saxophone,
    trumpets,
  },
}) => {
  return (
    <SongStyle>
      <ul className="song-collection">
        <li className="song-container__songtitle">
          <span className="material-symbols-rounded">music_note</span>
          <h2 className="song-collection__title">{`${songTitle}`}</h2>
        </li>
        <li className="song-collection__song">
          <span className="material-symbols-rounded">person</span>
          <h3 className="song-collection__artist">{`${artist}`}</h3>
        </li>
        <li className="song-list__release">
          <p>release date: {`${releaseDate}`}</p>
        </li>
        {/* <li>
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
        </li> */}
        <li className="song-collection__button">
          <Button text="i'll take it!" styleType="primary" action={() => {}} />
          <Button text="delete" styleType="secondary" />
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongDetailsComponent;
