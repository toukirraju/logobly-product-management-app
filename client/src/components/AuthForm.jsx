/* eslint-disable react/prop-types */
import { lockIcon, mailIcon } from "../assets";
import InputField from "./InputField";
import ServerError from "./ServerError";
import useAuth from "../hooks/useAuth";

const AuthForm = ({ isSignIn }) => {
  const { initialValues, handleChange, handleSubmit, error } = useAuth({
    isSignIn,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <ServerError message={error?.data?.message} />}

        {!isSignIn && (
          <InputField
            label="Full name"
            type="text"
            name="name"
            value={initialValues.name}
            onChange={handleChange}
            placeholder="Please enter your full name"
          />
        )}

        <InputField
          label="Email"
          type="email"
          name="email"
          value={initialValues.email}
          onChange={handleChange}
          required
          placeholder="Please enter your email"
          img_icon={mailIcon}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={initialValues.password}
          onChange={handleChange}
          required
          placeholder="Please enter your password"
          img_icon={lockIcon}
        />

        {isSignIn && (
          <div className="py-2 text-[14px] flex justify-between">
            <label className=" flex items-center gap-2">
              <input type="checkbox" name="" id="terms" />
              <span>Remember me</span>
            </label>
            <span className="text-blue-600 cursor-pointer font-semibold">
              Forgot Password?
            </span>
          </div>
        )}

        {!isSignIn && (
          <>
            <div>
              <p className="font-semibold">Select type of your role</p>

              <div className="flex justify-between gap-2">
                <label
                  htmlFor="admin"
                  className="flex items-center py-2 px-24 active:bg-gray-100 rounded-md shadow-sm shadow-gray-300 active:outline outline-1 outline-blue-600"
                >
                  <input
                    id="admin"
                    type="radio"
                    name="isAdmin"
                    // value={initialValues.isAdmin}
                    value={true}
                    checked={initialValues.isAdmin === true}
                    onChange={handleChange}
                  />
                  <span className={`pl-2 `}>Admin</span>
                </label>

                <label
                  htmlFor="user"
                  className="flex items-center py-2 px-24 active:bg-gray-100 rounded-md shadow-sm shadow-gray-300 active:outline outline-1 outline-blue-600"
                >
                  <input
                    id="user"
                    type="radio"
                    name="isAdmin"
                    // value={initialValues.isAdmin}
                    value={false}
                    checked={initialValues.isAdmin === false}
                    onChange={handleChange}
                  />
                  <span className={`pl-2 `}>User</span>
                </label>
              </div>
            </div>

            <div className="py-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value={initialValues.terms}
                onChange={handleChange}
              />
              <label className="text-[14px]">
                I agree to all the <a href="#">term</a>,{" "}
                <a href="#">Privacy Policy</a> and
                <a href="#"> Fees</a>.
              </label>
            </div>
          </>
        )}

        <button
          className="bg-blue-600 w-full rounded my-3 py-1.5 text-white disabled:cursor-not-allowed disabled:bg-blue-300"
          type="submit"
          disabled={!initialValues.terms && !isSignIn}
        >
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
