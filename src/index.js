import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import puppyData from './data/mockdata.json';
import firebase from 'firebase/app';
import 'firebase/database';
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

//Router
import { BrowserRouter } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBtvDx3lxzcqQRfS_IzQ-N2TAUwfocNIE",
  authDomain: "moodybuddy-90acf.firebaseapp.com",
  projectId: "moodybuddy-90acf",
  storageBucket: "moodybuddy-90acf.appspot.com",
  messagingSenderId: "194374275585",
  appId: "1:194374275585:web:44616b729ee14c15b3e600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App puppyData={puppyData} />
  </BrowserRouter>
);
