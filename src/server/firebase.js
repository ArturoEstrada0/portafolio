// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPL2EUatGYWBV6EZMrFJbXehNyj-baEQ",
  authDomain: "arturo-estrada.firebaseapp.com",
  projectId: "arturo-estrada",
  storageBucket: "arturo-estrada.appspot.com",
  messagingSenderId: "512812924252",
  appId: "1:512812924252:web:6fbb12d29d0f4a4598d599",
  measurementId: "G-KK3Z58WV9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);