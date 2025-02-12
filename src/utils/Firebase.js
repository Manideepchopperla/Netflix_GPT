// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAefVmCwLJbwKGECo_QvsMSTQ8do32ICmY",
  authDomain: "netflixgpt-bff44.firebaseapp.com",
  projectId: "netflixgpt-bff44",
  storageBucket: "netflixgpt-bff44.firebasestorage.app",
  messagingSenderId: "394845030370",
  appId: "1:394845030370:web:d99e51e55d843a56a39bbb",
  measurementId: "G-5PLYM7SQS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();