import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

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
// const db = getFirestore(app);
export default app;
