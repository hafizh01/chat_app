// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0waxuyNg54ptyvT8GUsvmxVUZMRp1M2E",
  authDomain: "hafizh-chat-app.firebaseapp.com",
  projectId: "hafizh-chat-app",
  storageBucket: "hafizh-chat-app.appspot.com",
  messagingSenderId: "638399033273",
  appId: "1:638399033273:web:c307544d2d4e40888a1068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app)
