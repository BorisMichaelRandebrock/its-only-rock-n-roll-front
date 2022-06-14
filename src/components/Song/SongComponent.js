import SongStyle from "./SongStyle";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteSongThunk } from "../../redux/thunks/songThunks";
import { useNavigate } from "react-router-dom";

const SongComponent = ({ song: { artist, songTitle, _id } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteSongThunk(_id));
  };
  const goToDetailPage = () => {
    navigate(`/details/${_id}`);
  };

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
          <Button text="details" styleType="primary" action={goToDetailPage} />
          <button className="secondary" onClick={handleDelete}>
            delete
          </button>
        </li>
      </ul>
    </SongStyle>
  );
};

export default SongComponent;
