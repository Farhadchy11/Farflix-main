import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW47FdHHXHzne5gtZwTcmtB4be9yre98E",
  authDomain: "farflix-165ba.firebaseapp.com",
  projectId: "farflix-165ba",
  storageBucket: "farflix-165ba.appspot.com",
  messagingSenderId: "269767373304",
  appId: "1:269767373304:web:ba7c167f50a99d0a99260d",
  measurementId: "G-6NJ0CMX8SM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};

