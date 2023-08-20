import { eyeSlashIcon, lockIcon, mailIcon, userIcon } from "../assets";

const AuthForm = ({ isSignIn }) => {
  return (
    <form>
      {!isSignIn && (
        <div>
          <label className="font-semibold">Full name</label>
          <div className="relative my-1">
            <input
              className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-8 "
              type="text"
              name=""
              id=""
              placeholder="Please enter your full name"
            />
            <img className="absolute left-2 top-2 h-5" src={userIcon} alt="" />
          </div>
        </div>
      )}

      <div>
        <label className="font-semibold">Email</label>
        <div className="relative my-1">
          <input
            className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-8 "
            type="text"
            name=""
            id=""
            placeholder="Please enter your email"
          />
          <img className="absolute left-2 top-2 h-5" src={mailIcon} alt="" />
        </div>
      </div>
      <div>
        <label className="font-semibold">Password</label>
        <div className="relative my-1">
          <input
            className="w-full h-9 bg-gray-100 border rounded border-gray-300 shadow-sm text-gray-400 outline-none pl-8 "
            type="text"
            name=""
            id=""
            placeholder="Please enter your password"
          />
          <img className="absolute left-2 top-2 h-5" src={lockIcon} alt="" />
          <img
            className="absolute right-2 top-2 h-5"
            src={eyeSlashIcon}
            alt=""
          />
        </div>
      </div>

      <div className="py-2 text-[14px] flex justify-between">
        <label className=" flex items-center gap-2">
          <input type="checkbox" name="" id="terms" />
          <span>Remember me</span>
        </label>
        <span className="text-blue-600 cursor-pointer font-semibold">
          Forgot Password?
        </span>
      </div>

      {!isSignIn && (
        <>
          <div>
            <p className="font-semibold">Select type of yor role</p>

            <div className="flex justify-between gap-2">
              <label
                htmlFor="admin"
                className="flex items-center py-2 px-24 active:bg-gray-100 rounded-md shadow-sm shadow-gray-300 active:outline outline-1 outline-blue-600"
              >
                <input type="radio" name="" id="admin" />
                <span className="pl-2 active:text-blue-600">Admin</span>
              </label>

              <label
                htmlFor="user"
                className="flex items-center py-2 px-24 active:bg-gray-100 rounded-md shadow-sm shadow-gray-300 active:outline outline-1 outline-blue-600"
              >
                <input type="radio" name="" id="user" />
                <span className="pl-2">User</span>
              </label>
            </div>
          </div>

          <div className="py-2 flex items-center gap-2">
            <input type="checkbox" name="" id="terms" />
            <label className="text-[14px]">
              I agree to all the <a href="#">term</a>,{" "}
              <a href="#">Privacy Policy</a> and
              <a href="#"> Fees</a>.
            </label>
          </div>
        </>
      )}

      <button className="bg-blue-600 w-full rounded my-3 py-1.5 text-white">
        {isSignIn ? "Sign In" : "Sign up"}
      </button>
    </form>
  );
};

export default AuthForm;
