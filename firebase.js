// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVrJBU2WS8DPysWwnx6hdsXItGSTsZig",
  authDomain: "finalproject-f8cdd.firebaseapp.com",
  projectId: "finalproject-f8cdd",
  storageBucket: "finalproject-f8cdd.appspot.com",
  messagingSenderId: "550870600266",
  appId: "1:550870600266:web:4ceeda629afd6b8fbf74b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
