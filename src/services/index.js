// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

  // apiKey: "AIzaSyDlZeDGKLUg4WjuMPeltyiCf6eQW1KxmiY",
  // authDomain: "reactcoder-ecommerce.firebaseapp.com",
  // projectId: "reactcoder-ecommerce",
  // storageBucket: "reactcoder-ecommerce.appspot.com",
  // messagingSenderId: "1082270219655",
  // appId: "1:1082270219655:web:e310edc2515ab8af812722"


};

// Initialize Firebase
initializeApp(firebaseConfig);

