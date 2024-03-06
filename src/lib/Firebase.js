// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

import { getStorage, connectStorageEmulator } from "firebase/storage";



const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
  
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  
    projectId: process.env.REACT_APP_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  
    appId: process.env.REACT_APP_APP_ID,
  
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  
  };
  


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

// Initialize Emulators

if (window.location.hostname ==='localhost') {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectStorageEmulator(storage, "127.0.0.1", 9199);
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  }