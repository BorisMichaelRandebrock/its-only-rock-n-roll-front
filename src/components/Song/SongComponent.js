import SongStyle from "./SongStyle";
import Button from "../Button/Button";

const SongComponent = ({ song: { artist, songTitle } }) => {
  return (
    <SongStyle>
      <ul className="song-collection">
        <li className="song-collection__header">
          <h3 className="song-collection__title">{`${songTitle}`}</h3>
        </li>
        <li className="song-collection__song">
          <h4 className="song-collection__artist">{`${artist}`}</h4>
        </li>
        <li className="song-collection__button">
          <Button text="i'll take it!" styleType="primary" action={() => {}} />
        </li>
        <li className="song-collection__button">
          <Button text="delete" styleType="secondary" />
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongComponent;
