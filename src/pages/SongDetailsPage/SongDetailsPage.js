import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SongDetailsComponent from "../../components/SongDetailsComponent/SongDetailsComponent";
import { loadOneSongThunk } from "../../redux/thunks/songThunks";

const SongDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneSongThunk(id));
  }, [dispatch, id]);

  return <SongDetailsComponent />;
};
export default SongDetailsPage;
