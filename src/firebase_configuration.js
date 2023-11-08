import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkEsZF6ISGAYWGaI9ALstOzHyHlVvqYuQ",
    authDomain: "soen341brokebrokers.firebaseapp.com",
    projectId: "soen341brokebrokers",
    storageBucket: "soen341brokebrokers.appspot.com",
    messagingSenderId: "1010248927281",
    appId: "1:1010248927281:web:d1c5ff69471507b81bed10",
    measurementId: "G-602KDDJBP8"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth };