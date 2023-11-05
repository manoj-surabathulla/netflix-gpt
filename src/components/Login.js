import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { checkValidateData } from "../utilis/validate";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { BG_URL, USER_AVATAR } from "../utilis/constants";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSigninForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      //signUp form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md m-2 w-full bg-[#333]"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
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
