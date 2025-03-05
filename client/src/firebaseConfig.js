import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD80jqA6do8wpEMqENbcB4G-hAQgmfVqsY",
    authDomain: "crud-firebase-app-6093a.firebaseapp.com",
    databaseURL: "https://crud-firebase-app-6093a-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-app-6093a",
    storageBucket: "crud-firebase-app-6093a.firebasestorage.app",
    messagingSenderId: "125329122322",
    appId: "1:125329122322:web:8f53a86ddb4657627a64cb",
    measurementId: "G-PFSPM003MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Firebase Authentication
const auth = getAuth(app);

export { db, auth };