// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-FOHYWpUBwVO3Yj8fu1A3rjxsUpq-qeM",
  authDomain: "learning-ms-af297.firebaseapp.com",
  projectId: "learning-ms-af297",
  storageBucket: "learning-ms-af297.appspot.com",
  messagingSenderId: "319017366024",
  appId: "1:319017366024:web:0e0413ae30f16cfee757bd",
  measurementId: "G-E4FNYE58BZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);