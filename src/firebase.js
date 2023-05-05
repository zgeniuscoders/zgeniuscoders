// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLDEE9X1jUCTKdIQ3aP6X2ypjIesZFAbs",
  authDomain: "zgeniuscoders-8db9c.firebaseapp.com",
  projectId: "zgeniuscoders-8db9c",
  storageBucket: "zgeniuscoders-8db9c.appspot.com",
  messagingSenderId: "927984828227",
  appId: "1:927984828227:web:975a26c0c6c3fd770c39f6",
  measurementId: "G-FL6C9EQ1RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);