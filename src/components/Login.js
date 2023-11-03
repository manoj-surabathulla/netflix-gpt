import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign Un" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
        />
        <button className="p-4 my-6 bg-red-600 w-full">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "Already register Sign In Now"
            : "New to Netflix? Sign Up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
