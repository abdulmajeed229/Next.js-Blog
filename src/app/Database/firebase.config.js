
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyBsPLZvkFbNHgvWfS0O2ZFirOekME_5yuk",
  authDomain: "governor-house-blog.firebaseapp.com",
  projectId: "governor-house-blog",
  storageBucket: "governor-house-blog.appspot.com",
  messagingSenderId: "1046361975098",
  appId: "1:1046361975098:web:21f7219c19f5101fca0803"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
