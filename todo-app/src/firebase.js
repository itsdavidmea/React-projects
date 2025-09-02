//authentification of users 

import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--eEomvy-oLIGzPjNPzEKC6H4eIfOf-k",
  authDomain: "todo-app-d3d37.firebaseapp.com",
  projectId: "todo-app-d3d37",
  storageBucket: "todo-app-d3d37.firebasestorage.app",
  messagingSenderId: "1065971736918",
  appId: "1:1065971736918:web:f6ac88993d6a9a6c7136f7",
  measurementId: "G-W810HW3B1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export {app, auth};