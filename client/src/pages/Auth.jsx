import { useState } from "react";
import { Logo, loginRightImg, starsIcon, whiteLogo } from "../assets";
import AuthForm from "../components/AuthForm";
const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="bg-white h-screen flex justify-between ">
      {/* left side */}
      <div className="lg:w-1/2 p-8 lg:p-28  flex justify-center items-center flex-col ">
        <div className="max-w-[500px]">
          <img src={Logo} alt="" />
          <div className="text-center py-7">
            <h1 className="text-2xl font-bold">
              {isSignIn ? "Welcome back 👋" : "Get started now ✨"}
            </h1>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae
              gravida risus rhoncus. Montes nam amet
            </p>
          </div>
          <div>
            {/* input form */}
            <AuthForm isSignIn={isSignIn} />
          </div>
        </div>
        {isSignIn ? (
          <span className="py-5 text-[16px]">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => setIsSignIn(false)}
            >
              Sign Up for free
            </span>
          </span>
        ) : (
          <span className="py-5 text-[16px]">
            Already have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => setIsSignIn(true)}
            >
              Log in
            </span>
          </span>
        )}
      </div>
      {/* right side */}
      <div className="hidden relative lg:flex justify-center   lg:w-1/2">
        <img
          className="w-full object-fit h-screen"
          src={loginRightImg}
          alt=""
        />
        <img className="absolute top-6 right-5" src={whiteLogo} alt="" />
        <div className="absolute text-white bottom-6 rounded-lg mx-6 p-4  bg-zinc-800 bg-opacity-25  backdrop-blur-md ">
          <p className="text-[24px] text-justify">
            Given a full text query such das rotes Kleid our approach retrieves
            matching product images. You can try different queries in the demo
            and visually inspect retrieved images.
          </p>
          <div className="flex justify-between mt-3">
            <div>
              <h3 className="text-[24px]">Cameron Williamson</h3>
              <p>Founder, Logobly</p>
            </div>
            <div>
              <img className="h-5" src={starsIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
