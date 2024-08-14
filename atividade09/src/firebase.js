// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbC2kBSLUqrdN7IMzK-7D0KWW9b2VJtyQ",
  authDomain: "web3-53b9a.firebaseapp.com",
  projectId: "web3-53b9a",
  storageBucket: "web3-53b9a.appspot.com",
  messagingSenderId: "837855546701",
  appId: "1:837855546701:web:861c3ecbcce330e134fb04",
  measurementId: "G-NSTPP0JG1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
