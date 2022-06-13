// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSihD_DWDtGH9X0l9qDjq07BklD7yaCQ",
  authDomain: "nike-warehouse.firebaseapp.com",
  projectId: "nike-warehouse",
  storageBucket: "nike-warehouse.appspot.com",
  messagingSenderId: "268495026389",
  appId: "1:268495026389:web:e5b4d958f9e41369e08a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;