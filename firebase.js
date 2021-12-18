// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkMen_NfnV-_w_45In-lS1CcVv_Zyzhic",
  authDomain: "twitter-clone-f9b87.firebaseapp.com",
  projectId: "twitter-clone-f9b87",
  storageBucket: "twitter-clone-f9b87.appspot.com",
  messagingSenderId: "446369251693",
  appId: "1:446369251693:web:a738618a303a06cd5e5a64",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
