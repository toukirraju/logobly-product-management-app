/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { clearError } from "../redux/features/errorSlice";

const ServerError = ({ message = "Somthing want wrong" }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <div className="relative flex justify-between bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
        <span className="block text-sm text-black">{message}</span>
        <button onClick={() => dispatch(clearError())}>X</button>
      </div>
    </div>
  );
};

export default ServerError;
