// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-CD_eRuTFkedTK4Yd3tEQHToUymahOcw",
  authDomain: "portafolio-63394.firebaseapp.com",
  projectId: "portafolio-63394",
  storageBucket: "portafolio-63394.appspot.com",
  messagingSenderId: "1055448972439",
  appId: "1:1055448972439:web:a81f947d3fda74c0c73dd2",
  measurementId: "G-SMWG4QGLMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);