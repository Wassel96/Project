import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD5XulCLziSYAA7esDhPMn9UKAirYM3LRA",
    authDomain: "printmanager-nexans.firebaseapp.com",
    projectId: "printmanager-nexans",
    storageBucket: "printmanager-nexans.appspot.com",
    messagingSenderId: "82852126721",
    appId: "1:82852126721:web:44ba50b3cc0f5b33e86000"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)