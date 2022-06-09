import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSongsThunk } from "../../redux/thunks/songThunks";
import SongComponent from "../Song/SongComponent";
import SongListStyles from "./SongListStyles";

const SongList = () => {
  const songs = useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(loadSongsThunk());
    })();
  }, [dispatch]);

  return (
    <SongListStyles>
      <h1>Songlist</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <SongComponent song={song} />
          </li>
        ))}
      </ul>
    </SongListStyles>
  );
};

export default SongList;
