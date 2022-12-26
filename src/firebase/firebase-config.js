// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";

// Firebase import for web
 import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA2XjFFusPPlSCz4V330J3KcZgzqrS3EW0",
  authDomain: "pasteleria-gm.firebaseapp.com",
  projectId: "pasteleria-gm",
  storageBucket: "pasteleria-gm.appspot.com",
  messagingSenderId: "443136481149",
  appId: "1:443136481149:web:64d52f40503a32b82e5e14"
};

// App
const app = getApps().length ===0 ? initializeApp(firebaseConfig):firebase.initializeApp(firebaseConfig);
// Auth
export const defaultAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Cloud firestore Database 
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
