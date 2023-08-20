import { Navigate } from "react-router-dom";
import useCheckLogin from "../hooks/useCheckLogin";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useCheckLogin();

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
