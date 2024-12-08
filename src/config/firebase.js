// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZsVQyh0yKb9TJ-t0pOJIpVjPCNP4Ukis",
  authDomain: "mechjiapp.firebaseapp.com",
  projectId: "mechjiapp",
  storageBucket: "mechjiapp.firebasestorage.app",
  messagingSenderId: "383469495330",
  appId: "1:383469495330:web:f697304effe0c2ed21567b",
  measurementId: "G-X4426XBNRF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);