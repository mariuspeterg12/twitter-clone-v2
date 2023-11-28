// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v2-cdb9f.firebaseapp.com",
  projectId: "twitter-v2-cdb9f",
  storageBucket: "twitter-v2-cdb9f.appspot.com",
  messagingSenderId: "52260366286",
  appId: "1:52260366286:web:684f5372c105b52a522d9f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
