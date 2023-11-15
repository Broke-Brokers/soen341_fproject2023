import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWtoJrCuXAyBRXWYqNj9osk7PRgWA4t10",
  authDomain: "testsnapshot-f7a6c.firebaseapp.com",
  projectId: "testsnapshot-f7a6c",
  storageBucket: "testsnapshot-f7a6c.appspot.com",
  messagingSenderId: "282328603653",
  appId: "1:282328603653:web:dffd223f3e7975a3cf106c",
  measurementId: "G-P4NXM6D4E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};