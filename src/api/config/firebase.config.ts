// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhUHX43-88AGvpirPJbQOr_dIWkMjHWWk",
  authDomain: "smart-planner-89afd.firebaseapp.com",
  projectId: "smart-planner-89afd",
  storageBucket: "smart-planner-89afd.appspot.com",
  messagingSenderId: "928012281689",
  appId: "1:928012281689:web:3ac14163250e7c05090e48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
