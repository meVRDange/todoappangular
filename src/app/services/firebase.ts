// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqwBcDwNs3MM2rzxvtDrcgFOX-my3i2c8",
  authDomain: "demoapp-ad808.firebaseapp.com",
  projectId: "demoapp-ad808",
  storageBucket: "demoapp-ad808.appspot.com",
  messagingSenderId: "922713749542",
  appId: "1:922713749542:web:f8c57abb880442055acee7",
  measurementId: "G-M0R2MYV7M1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
