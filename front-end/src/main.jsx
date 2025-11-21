import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPHNzBUY9kwkoV7hG3mCHczWEuUpkS4F8",
  authDomain: "full-stack-react-e0068.firebaseapp.com",
  projectId: "full-stack-react-e0068",
  storageBucket: "full-stack-react-e0068.firebasestorage.app",
  messagingSenderId: "636396700950",
  appId: "1:636396700950:web:ef440ca1172ea6b53e3c37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
