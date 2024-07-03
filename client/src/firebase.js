// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-f7209.firebaseapp.com",
  projectId: "mernestate-f7209",
  storageBucket: "mernestate-f7209.appspot.com",
  messagingSenderId: "554962836283",
  appId: "1:554962836283:web:8182adae72b66e4aa5f51e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);