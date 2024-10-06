// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJG6mhym-VZqLr2czUp7y2JV66SAeMkHQ",
  authDomain: "chatapp-b33bf.firebaseapp.com",
  projectId: "chatapp-b33bf",
  storageBucket: "chatapp-b33bf.appspot.com",
  messagingSenderId: "406369030451",
  appId: "1:406369030451:web:d750baa1dffca384f12e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;