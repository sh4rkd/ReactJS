// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChkKqK_b1SPEw19TowBaW9SFL27KM78RI",
    authDomain: "arkstorecoder.firebaseapp.com",
    projectId: "arkstorecoder",
    storageBucket: "arkstorecoder.appspot.com",
    messagingSenderId: "270063464429",
    appId: "1:270063464429:web:013e9000b21d01a7d1c1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);