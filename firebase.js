import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDC7e7ubKb7eY0HWmnfcFvdOf6wcDDLXUg",
  authDomain: "neuroactiva-729ae.firebaseapp.com",
  projectId: "neuroactiva-729ae",
  storageBucket: "neuroactiva-729ae.firebasestorage.app",
  messagingSenderId: "69212968508",
  appId: "1:69212968508:web:57728bc674536424e4d539",
  measurementId: "G-WRDX23WTWY"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export {
  auth, db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc,
  collection, addDoc, query, where, orderBy, serverTimestamp
};