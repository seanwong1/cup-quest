import { v4 } from 'uuid';
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);

export async function saveProfilePicture(email, fileName, file) {
  try {
    const storageRef = ref(storage, `Profile_Pictures/${email}/${fileName + v4()}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    console.log('Profile picture saved');
    return downloadUrl;
  } catch (err) {
    console.log('Error saving profile picture', err);
    return null;
  }
}

