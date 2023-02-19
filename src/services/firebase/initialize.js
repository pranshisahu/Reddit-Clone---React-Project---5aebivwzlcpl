import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiMFyk6M7Fxd9ucUfSkqwYeDVSBg6dVqc",
  authDomain: "reddit-my-post.firebaseapp.com",
  projectId: "reddit-my-post",
  storageBucket: "reddit-my-post.appspot.com",
  messagingSenderId: "316636017514",
  appId: "1:316636017514:web:6ae08a13cecc96a228eb13",
  measurementId: "G-FVLFSDXPR8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
