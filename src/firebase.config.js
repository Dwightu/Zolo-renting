// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxkiFUNGS6eZp8uV4AZ2J-IrlFNa7h1lk",
    authDomain: "house-marketplace-app-f9c59.firebaseapp.com",
    projectId: "house-marketplace-app-f9c59",
    storageBucket: "house-marketplace-app-f9c59.appspot.com",
    messagingSenderId: "612244066060",
    appId: "1:612244066060:web:54bbd8336c23be8532c329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()