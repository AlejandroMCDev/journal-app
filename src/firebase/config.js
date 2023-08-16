// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID
} = getEnviroments();

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyAb-nWkgbUAJ6FdP1rV95rs5mOgnq4a8xo",
  authDomain: "react-cursos-a822c.firebaseapp.com",
  projectId: "react-cursos-a822c",
  storageBucket: "react-cursos-a822c.appspot.com",
  messagingSenderId: "797266827405",
  appId: "1:797266827405:web:8e5e061a001789ee56aac4"
}; */

//Testing

/* const firebaseConfig = {
  apiKey: "AIzaSyCfBpqoGeAXbKWHvZIkah3yotekX_xpYps",
  authDomain: "flutter-varios-79f4a.firebaseapp.com",
  databaseURL: "https://flutter-varios-79f4a-default-rtdb.firebaseio.com",
  projectId: "flutter-varios-79f4a",
  storageBucket: "flutter-varios-79f4a.appspot.com",
  messagingSenderId: "441874604322",
  appId: "1:441874604322:web:642b9b14cebbb0e7bfc57b",
  measurementId: "G-MZEJJ3TQLV"
}; */

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID
};


// Initialize Firebase
export const FireabaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FireabaseApp );

export const FirebaseDB = getFirestore( FireabaseApp )