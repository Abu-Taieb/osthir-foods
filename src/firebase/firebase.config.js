// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1-NThZ3uNOnB6dDZw8zM10BpeaR-9ops",
  authDomain: "osthir-foods.firebaseapp.com",
  projectId: "osthir-foods",
  storageBucket: "osthir-foods.appspot.com",
  messagingSenderId: "251441585265",
  appId: "1:251441585265:web:22367ab0473e3a1f220fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;