import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKImCvyZ5-vUji_Jdf0QiyZYFr1mzPaLk",
  authDomain: "gw-19-market.firebaseapp.com",
  projectId: "gw-19-market",
  storageBucket: "gw-19-market.appspot.com",
  messagingSenderId: "917597400704",
  appId: "1:917597400704:web:5eeb2a83ec1299bac8c065",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
