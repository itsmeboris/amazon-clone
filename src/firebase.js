import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqSBEgUl2yi_OkxW7f5YWPWTyKFxXmpr0",
  authDomain: "clone-7538e.firebaseapp.com",
  databaseURL: "https://clone-7538e.firebaseio.com",
  projectId: "clone-7538e",
  storageBucket: "clone-7538e.appspot.com",
  messagingSenderId: "475323059450",
  appId: "1:475323059450:web:9f424ee00d5007532c8d43",
  measurementId: "G-D9B9HLC86D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
