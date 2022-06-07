import SongStyle from "./SongStyle";
import Button from "../Button/Button";

const SongComponent = ({ song: artist, title }) => {
  return (
    <SongStyle>
      <ul className="song-collection">
        <li className="song-collection__header">
          <h2 className="song-collection__title">its only rock n roll</h2>
        </li>
        <li className="song-collection__song">
          <h3 className="song-collection__artist">Stones</h3>
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
