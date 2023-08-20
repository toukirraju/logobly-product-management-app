import { useSelector } from "react-redux";

const useCheckLogin = () => {
  const auth = useSelector((state) => state.auth);

  if (auth?.accessToken && auth?.user) {
    return true;
  } else {
    return false;
  }
};

export default useCheckLogin;
