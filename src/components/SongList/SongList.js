import { useSelector } from "react-redux";
import SongComponent from "../Song/SongComponent";
import SongListStyles from "./SongListStyles";

const SongList = () => {
  const songs = useSelector((status) => status.song);
  console.log(songs);

  return (
    <SongListStyles>
      <h2>List of Songs</h2>
      {songs.map((song) => (
        <li>
          <SongComponent song={song} key={song.id} />
        </li>
      ))}
    </SongListStyles>
  );
};

export default SongList;
