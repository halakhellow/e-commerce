import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let config = {
  apiKey: "AIzaSyBbUs-rvfrqceopZph1IIrFyQ5PJpj1UXg",
  authDomain: "e-commerce-db-6b400.firebaseapp.com",
  databaseURL: "https://e-commerce-db-6b400.firebaseio.com",
  projectId: "e-commerce-db-6b400",
  storageBucket: "e-commerce-db-6b400.appspot.com",
  messagingSenderId: "664831205699",
  appId: "1:664831205699:web:eb3554e8208d5cd12a8ff6",
  measurementId: "G-W7KV8RM684",
};

firebase.initializeApp(config);
