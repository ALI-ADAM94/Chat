import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-df731.firebaseapp.com",
  projectId: "reactchat-df731",
  storageBucket: "reactchat-df731.firebasestorage.app",
  messagingSenderId: "706383037258",
  appId: "1:706383037258:web:c149d7e6d566d4ab4c37b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();