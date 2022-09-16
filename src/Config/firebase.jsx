// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRHFyJBlM8o5wHwyCiG19fTX2Q_6pA4N8",
  authDomain: "e-commerce-95cfb.firebaseapp.com",
  projectId: "e-commerce-95cfb",
  storageBucket: "e-commerce-95cfb.appspot.com",
  messagingSenderId: "656104380420",
  appId: "1:656104380420:web:bd0a48ffdae03a5b713d51",
  measurementId: "G-5MDDMR8XKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();