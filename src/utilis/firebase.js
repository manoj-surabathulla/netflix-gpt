// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKVaRxOjHIeYrlHXRvV5xQ9s8Xqm4QRMg",
  authDomain: "netflixgpt-20a69.firebaseapp.com",
  projectId: "netflixgpt-20a69",
  storageBucket: "netflixgpt-20a69.appspot.com",
  messagingSenderId: "1071367600714",
  appId: "1:1071367600714:web:f13d1ada1d72c15b5bc4b3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
