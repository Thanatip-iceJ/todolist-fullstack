import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Authenticated({ children }) {
  const context = useContext(AuthContext);
  if (!context.user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Authenticated;
