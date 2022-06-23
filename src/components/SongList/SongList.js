import { useSelector } from "react-redux";
import SongComponent from "../Song/SongComponent";
import SongListStyles from "./SongListStyles";

const SongList = () => {
  const songs = useSelector((state) => state.song);

  return (
    <SongListStyles>
      <h1>Songlist</h1>
      <ul>
        {songs.map((song, index) => (
          <li>
            <SongComponent song={song} />
          </li>
        ))}
      </ul>
    </SongListStyles>
  );
};

export default SongList;
