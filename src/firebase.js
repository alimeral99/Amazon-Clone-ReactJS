// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeuOWAyW26_xiSfg3MKtCImlRHMdYfUJk",
  authDomain: "clone-98bb8.firebaseapp.com",
  projectId: "clone-98bb8",
  storageBucket: "clone-98bb8.appspot.com",
  messagingSenderId: "26251484537",
  appId: "1:26251484537:web:47d83b91ba77f27247a3a8",
  measurementId: "G-DFVJ43V8K0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
