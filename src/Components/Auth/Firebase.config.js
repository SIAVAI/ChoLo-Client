// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ZMDXLL7RDjafrlqBz8uBbGIOij5CVZU",
  authDomain: "cholo-3282b.firebaseapp.com",
  projectId: "cholo-3282b",
  storageBucket: "cholo-3282b.appspot.com",
  messagingSenderId: "470949973672",
  appId: "1:470949973672:web:dbf1bd06fb799bff953c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;