import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function logout() {
  await signOut(auth);
  console.log('Logged out')
}

export async function signIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  // console.log('Logged in: ', email)
}

export async function createUser(email, password) {
  await createUserWithEmailAndPassword(auth, email, password)
  // console.log('User created: ', email)
}

export function getCurrentUser() {
  const user = auth.currentUser;
  if (user) {
    // console.log('Currently logged in user: ', user.email);
    return user;
  } else {
    console.log('No user is currently logged in');
    return null;
  }
}