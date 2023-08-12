// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZQckmH8x3Ngbm7aVmLgJqK3vtCVi6XEc",
  authDomain: "vuepinia.firebaseapp.com",
  projectId: "vuepinia",
  storageBucket: "vuepinia.appspot.com",
  messagingSenderId: "371046309780",
  appId: "1:371046309780:web:8f8b5dbedcea33c96df981",
  measurementId: "G-N9W953VZYY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export { analytics, auth }