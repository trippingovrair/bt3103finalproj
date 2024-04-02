// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsYIIIbxgiFq4tZ-ddcNPGRazu_qZrg6Q",
  authDomain: "bt3103-grp14fp.firebaseapp.com",
  projectId: "bt3103-grp14fp",
  storageBucket: "bt3103-grp14fp.appspot.com",
  messagingSenderId: "81911533733",
  appId: "1:81911533733:web:e554c624488919865afd4c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
export default firebase