// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmgU-c2QDrHaMp-D0UgJzgw62_YqrTltQ",
  authDomain: "proyectoweb-9a868.firebaseapp.com",
  projectId: "proyectoweb-9a868",
  storageBucket: "proyectoweb-9a868.firebasestorage.app",
  messagingSenderId: "608723521749",
  appId: "1:608723521749:web:c6ca3ea8ca18f08725525c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };