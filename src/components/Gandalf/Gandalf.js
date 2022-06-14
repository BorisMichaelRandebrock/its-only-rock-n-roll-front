import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManoloElDelBombo = ({ children }) => {
  const navigate = useNavigate();
  const { logged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default ManoloElDelBombo;
