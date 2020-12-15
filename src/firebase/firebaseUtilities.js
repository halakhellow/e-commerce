import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import configObject from "./firebase-config";

let config = configObject;

export let createUserDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let snapShot = await userRef.get();
  if (!snapShot.exists) {
    let { displayName, email } = userAuth;
    let docCreationDate = new Date();

    try {
      await userRef.set({ displayName, email, docCreationDate, ...otherData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export let auth = firebase.auth();
export let firestore = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export let signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
