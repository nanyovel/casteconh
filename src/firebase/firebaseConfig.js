// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBcE-Lpg6sA6kr9ym77H6yWs2G0LM9U9lE",
//   authDomain: "casteconh-609a5.firebaseapp.com",
//   projectId: "casteconh-609a5",
//   storageBucket: "casteconh-609a5.firebasestorage.app",
//   messagingSenderId: "293510058065",
//   appId: "1:293510058065:web:d3643e1e4d6fdc2c15e870",
//   measurementId: "G-DHFCNEQ4YC",
// };

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
export const autenticar = getAuth(app);
logEvent(analytics, "notification_received");
const db = getFirestore(app);
export const storage = getStorage(app);
export default db;
