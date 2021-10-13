// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJZZlCFOqzlzj5DkTHYhcEZoknOcQdHg",
  authDomain: "instagram-4aaa6.firebaseapp.com",
  projectId: "instagram-4aaa6",
  storageBucket: "instagram-4aaa6.appspot.com",
  messagingSenderId: "470378633361",
  appId: "1:470378633361:web:b2d724d1ea3199a44f4730",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
