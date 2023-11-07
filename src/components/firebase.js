import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_zgEQNn-d6Y9jmY6dC2aM_MuenWFViVc",
  authDomain: "images-213c6.firebaseapp.com",
  projectId: "images-213c6",
  storageBucket: "images-213c6.appspot.com",
  messagingSenderId: "654565633325",
  appId: "1:654565633325:web:c11cb188c8329948a2b7a4",
  measurementId: "G-795DEY2KPB",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
