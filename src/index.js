import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0HYvOVmjp_DnRKJcjhQPJsPsTESXR0rw",
  authDomain: "bullsmoke-ecommerce-43220.firebaseapp.com",
  projectId: "bullsmoke-ecommerce-43220",
  storageBucket: "bullsmoke-ecommerce-43220.appspot.com",
  messagingSenderId: "997721860341",
  appId: "1:997721860341:web:a986b89e18014a72cb3dbc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);