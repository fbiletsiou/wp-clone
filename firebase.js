// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmm_WIFlkFE7WCkKBS6KGSeY_eWru9c9s",
  authDomain: "wp-clone-cb6bd.firebaseapp.com",
  projectId: "wp-clone-cb6bd",
  storageBucket: "wp-clone-cb6bd.appspot.com",
  messagingSenderId: "126875168123",
  appId: "1:126875168123:web:c360661f68e97a75b121de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
};

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
};