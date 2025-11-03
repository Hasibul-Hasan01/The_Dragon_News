// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa6k6on3e3t_DCO1UTK3CqzcGw7DPGpVY",
  authDomain: "dragon-news-8a433.firebaseapp.com",
  projectId: "dragon-news-8a433",
  storageBucket: "dragon-news-8a433.firebasestorage.app",
  messagingSenderId: "407614870247",
  appId: "1:407614870247:web:8e7cf2f8e466012833c842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

