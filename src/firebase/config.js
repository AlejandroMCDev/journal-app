// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-nWkgbUAJ6FdP1rV95rs5mOgnq4a8xo",
  authDomain: "react-cursos-a822c.firebaseapp.com",
  projectId: "react-cursos-a822c",
  storageBucket: "react-cursos-a822c.appspot.com",
  messagingSenderId: "797266827405",
  appId: "1:797266827405:web:8e5e061a001789ee56aac4"
};

// Initialize Firebase
export const FireabaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FireabaseApp );

export const FirebaseDB = getFirestore( FireabaseApp )