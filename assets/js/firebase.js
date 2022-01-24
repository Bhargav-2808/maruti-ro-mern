// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH0nJK6ZcoOVPtXtOw6wvnMf-v_lUYQCc",
  authDomain: "e-commerceweb-f6525.firebaseapp.com",
  projectId: "e-commerceweb-f6525",
  storageBucket: "e-commerceweb-f6525.appspot.com",
  messagingSenderId: "245292473828",
  appId: "1:245292473828:web:2c858153b2ba6509fc3bf1",
  measurementId: "G-FN3X9FPW9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var provider = new firebase.auth.GoogleAuthProvider();
