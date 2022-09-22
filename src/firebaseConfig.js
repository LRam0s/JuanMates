import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqpiOZWOYtQ-3TxQi4einRWbT2XTXPk2Q",
  authDomain: "juanmates-7e8e9.firebaseapp.com",
  projectId: "juanmates-7e8e9",
  storageBucket: "juanmates-7e8e9.appspot.com",
  messagingSenderId: "570727491070",
  appId: "1:570727491070:web:5e76fc094f717900b4ccaf",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
