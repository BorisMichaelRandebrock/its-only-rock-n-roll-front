import SongStyle from "./SongStyle";
import Button from "../Button/Button";

const SongComponent = ({ song: { artist, songTitle } }) => {
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
        <li className="song-collection__button">
          <Button text="i'll take it!" styleType="primary" action={() => {}} />
          <Button text="delete" styleType="secondary" />
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongComponent;
