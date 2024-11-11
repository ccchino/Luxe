import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh2gSE7ParOdKu3Y1oKxhGRLxm_vAGekY",
  authDomain: "luxe-537e7.firebaseapp.com",
  projectId: "luxe-537e7",
  storageBucket: "luxe-537e7.firebasestorage.app",
  messagingSenderId: "68844581120",
  appId: "1:68844581120:web:f924be7d2dc7d2bd2fc3e5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;