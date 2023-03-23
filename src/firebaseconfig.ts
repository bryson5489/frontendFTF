import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtM94NubWk0_5Qe1iMEWhn_QKbh8l0jJM",
  authDomain: "fieldtofeast-a9258.firebaseapp.com",
  projectId: "fieldtofeast-a9258",
  storageBucket: "fieldtofeast-a9258.appspot.com",
  messagingSenderId: "288392012978",
  appId: "1:288392012978:web:90de66679ca285cee395ab",
  measurementId: "G-T57L1Y45SH",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
