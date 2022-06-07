import SongStyle from "./SongStyleComponent";
import Button from "../Button/Button";
import { Provider } from "react-redux";
import SongListPage from "../../pages/SongListPage/SongListPage";
import SongCollectionPage from "../../pages/SongCollectionPage/SongCollectionPage";

const SongComponent = ({ song: artist, title }) => {
  const { page } = Provider;
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
          {page === SongListPage ? (
            <Button
              text="i'll take it!"
              styleType="primary"
              action={() => {}}
            />
          ) : (
            ""
          )}
          {page === SongCollectionPage ? (
            <Button text="delete" styleType="secondary" />
          ) : (
            ""
          )}
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongComponent;
