import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongDetailsComponent from "../../components/SongDetailsComponent/SongDetailsComponent";
import { loadOneSongThunk } from "../../redux/thunks/songThunks";

const SongDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentSong = useSelector((state) => state.song);

  useEffect(() => {
    dispatch(loadOneSongThunk(id));
  }, [dispatch, id]);
  return <SongDetailsComponent song={currentSong} />;
};
export default SongDetailsPage;
