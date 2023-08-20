import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useCheckLogin from "../hooks/useCheckLogin";

const PrivateRoute = ({ children }) => {
  // const { token, user } = useSelector((state) => state.auth);

  // if (token && user?.role?.name === "admin") {
  //   return children;
  // }
  // return <Navigate to="/auth" />;
  const isLoggedIn = useCheckLogin();
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
