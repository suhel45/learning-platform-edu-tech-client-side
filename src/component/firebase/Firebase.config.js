// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtGUqWPWdAJ3JSty6fNbvUUc9BbdxDSyc",
  authDomain: "educational-auth.firebaseapp.com",
  projectId: "educational-auth",
  storageBucket: "educational-auth.appspot.com",
  messagingSenderId: "556802500388",
  appId: "1:556802500388:web:337ae583a7506fc8c535b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;