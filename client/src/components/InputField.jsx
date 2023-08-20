/* eslint-disable react/prop-types */
import { eyeSlashIcon } from "../assets";

const InputField = ({
  label = "add any label",
  img_icon,
  fieldType = "input",
  ...rest
}) => {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <div className="relative my-1">
        {fieldType === "input" && (
          <input
            className={`w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none  ${
              img_icon ? "pl-8" : "pl-3"
            } `}
            {...rest}
          />
        )}

        {fieldType === "textarea" && (
          <textarea
            className={`w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none  ${
              img_icon ? "pl-8" : "pl-3"
            } `}
            {...rest}
          />
        )}

        {img_icon && (
          <img className="absolute left-2 top-2 h-5" src={img_icon} alt="" />
        )}

        {rest.type === "password" && (
          <img
            className="absolute right-2 top-2 h-5"
            src={eyeSlashIcon}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
