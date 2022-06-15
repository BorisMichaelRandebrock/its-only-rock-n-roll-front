import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gandalf = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (token) {
    return children;
  } else {
    return null;
  }
};

export default Gandalf;
