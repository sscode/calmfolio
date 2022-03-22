// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// import { TwitterAuthProvider } from "firebase/auth";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// const REACT_APP_FIREBASE_API = process.env;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "calmfolio.firebaseapp.com",
  projectId: "calmfolio",
  storageBucket: "calmfolio.appspot.com",
  messagingSenderId: "738556881782",
  appId: process.env.REACT_APP_FIREBASE_APP
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)

// const provider = new TwitterAuthProvider();