// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agriennetwork-40f31.firebaseapp.com",
  projectId: "agriennetwork-40f31",
  storageBucket: "agriennetwork-40f31.appspot.com",
  messagingSenderId: "575677350485",
  appId: "1:575677350485:web:a440ef76079bf7dea4cadc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);