import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJWo9m4kfSqUTUBgsxoAe1eUboDyYAA7U",
  authDomain: "portfolio-6df63.firebaseapp.com",
  projectId: "portfolio-6df63",
  storageBucket: "portfolio-6df63.appspot.com",
  messagingSenderId: "460470093960",
  appId: "1:460470093960:web:074b7bb44dd6b06f4cf73d",
  measurementId: "G-7G7QSR9T54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };