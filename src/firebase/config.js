import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC7Xmjo4ausbDYxm6aM9mkgu4VnXjkRHs",
  authDomain: "entregafinalcoderreact.firebaseapp.com",
  projectId: "entregafinalcoderreact",
  storageBucket: "entregafinalcoderreact.firebasestorage.app",
  messagingSenderId: "1060832536194",
  appId: "1:1060832536194:web:3c9df0d5b24f4e91fb769b",
  measurementId: "G-CE28T60R1C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);