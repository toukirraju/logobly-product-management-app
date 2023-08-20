import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/features/auth/authSlice";
import decodeJwtToken from "../utils/decodeJwtToken";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const token = localStorage?.getItem("accessToken");

    if (token) {
      const { userWithoutPassword } = decodeJwtToken(token);

      if (token && userWithoutPassword) {
        dispatch(
          userLoggedIn({
            accessToken: token,
            user: userWithoutPassword,
          })
        );
      }
    }
    setAuthCheck(true);
  }, []);

  return authCheck;
};

export default useAuthCheck;
