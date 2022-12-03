// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA2XjFFusPPlSCz4V330J3KcZgzqrS3EW0",
  authDomain: "pasteleria-gm.firebaseapp.com",
  projectId: "pasteleria-gm",
  storageBucket: "pasteleria-gm.appspot.com",
  messagingSenderId: "443136481149",
  appId: "1:443136481149:web:64d52f40503a32b82e5e14"
};

export const defaultApp = getApps().length ===0 ? initializeApp(firebaseConfig):null;
export const defaultAuth = initializeAuth(defaultApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});

