// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8JfPjv0cXV5L01cAbElQQMDM06PwESSU',
  authDomain: 'todo-app-fe9fc.firebaseapp.com',
  projectId: 'todo-app-fe9fc',
  storageBucket: 'todo-app-fe9fc.appspot.com',
  messagingSenderId: '113051300578',
  appId: '1:113051300578:web:359af78a7c491b05a164bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
