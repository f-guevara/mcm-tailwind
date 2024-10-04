import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyM8hxxVW53D4d9QNKP27250B2zwWVoqg",
  authDomain: "mc-industries.firebaseapp.com",
  projectId: "mc-industries",
  storageBucket: "mc-industries.appspot.com",
  messagingSenderId: "425285913943",
  appId: "1:425285913943:web:28b57e9f8a72132a088212"
};
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth instance

// Initialize Firestore instance
const db = getFirestore(app);

export { auth, db };